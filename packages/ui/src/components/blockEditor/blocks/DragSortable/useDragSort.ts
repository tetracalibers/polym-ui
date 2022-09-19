import { useRef, useState, DragEvent, useCallback } from 'react'
import { RequiredNotNull } from '../../types/RequiredNotNull'
import { PosDiff } from '../../types/PosDiff'

type UseDragSortArgs = {
  sortFn: (pos: RequiredNotNull<PosDiff>) => void
}

export const isValidPos = (pos: PosDiff): pos is RequiredNotNull<PosDiff> => {
  return pos.new !== null && pos.old !== null
}

export const useDragSort = ({ sortFn }: UseDragSortArgs) => {
  const oldPos = useRef<number | null>(null)
  const [newPos, setNewPos] = useState<number | null>(null)

  const getPosMap = useCallback(
    () => ({
      new: newPos,
      old: oldPos.current,
    }),
    [newPos, oldPos.current]
  )

  const resetPos = () => {
    oldPos.current = null
    setNewPos(null)
  }

  const dragStart = (_e: DragEvent<HTMLDivElement>, idx: number) => {
    oldPos.current = idx
  }

  const dragEnter = (_e: DragEvent<HTMLDivElement>, idx: number) => {
    setNewPos(idx)
  }

  const sortBydrop = () => {
    const pos = getPosMap()
    if (isValidPos(pos)) {
      sortFn && sortFn(pos)
    }
    resetPos()
  }

  const draggableRegister = (idx: number) => {
    return {
      draggable: true,
      onDragStart: (e: DragEvent<HTMLDivElement>) => dragStart(e, idx),
      onDragEnter: (e: DragEvent<HTMLDivElement>) => dragEnter(e, idx),
      onDragEnd: sortBydrop,
    }
  }

  const isMoving = (
    idx: number,
    pos: PosDiff
  ): pos is RequiredNotNull<PosDiff> => {
    return isValidPos(pos) && idx === pos.new
  }

  const isMovingUp = (idx: number) => {
    const pos = getPosMap()
    return isMoving(idx, pos) && pos.new > pos.old
  }

  const isMovingDown = (idx: number) => {
    const pos = getPosMap()
    return isMoving(idx, pos) && pos.new < pos.old
  }

  return {
    draggableRegister,
    isMovingDown,
    isMovingUp,
  }
}
