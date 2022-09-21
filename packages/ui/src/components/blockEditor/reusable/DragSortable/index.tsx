import { ReactElement, Fragment } from 'react'
import { InsertHere } from './InsertHere'
import { useDragSort } from './useDragSort'
import { PosDiff } from '../../types/PosDiff'
import { RequiredNotNull } from '../../types/RequiredNotNull'

type DragSortableProps<T extends { id: string } = { id: string }> = {
  sortFn: (pos: RequiredNotNull<PosDiff>) => void
  items: T[]
  render: (item: T, idx: number) => ReactElement
}

export const DragSortable = <T extends { id: string }>({
  sortFn,
  items,
  render,
}: DragSortableProps<T>) => {
  const { draggableRegister, isMovingDown, isMovingUp } = useDragSort({
    sortFn,
  })

  return (
    <>
      {items.map((item, idx) => (
        <Fragment key={item.id}>
          {isMovingDown(idx) && <InsertHere />}
          <div {...draggableRegister(idx)}>{render(item, idx)}</div>
          {isMovingUp(idx) && <InsertHere />}
        </Fragment>
      ))}
    </>
  )
}
