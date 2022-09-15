import _ from 'lodash'
import { useContext, useState } from 'react'
import { BlockEditorContext } from '..'
import { Button } from '../../core/Button/core'
import { UpdateAction } from '../module/reducer'

export type ChangeBoxTypeMenuProps = {
  initialBox: 'inline' | 'block'
  id: string
}

const useToggle = <F, S>(choices: [F, S], initial: F | S) => {
  const [currState, setCurr] = useState<F | S>(initial)
  const [first, second] = choices

  const nextState = currState === first ? second : first

  const toggleFn = () => {
    setCurr(curr => (curr === first ? second : first))
  }

  return [currState, nextState, toggleFn] as const
}

export const ChangeBoxTypeMenu = ({
  initialBox,
  id,
}: ChangeBoxTypeMenuProps) => {
  const { dispatch } = useContext(BlockEditorContext)
  const [, nextBoxType, toggleBoxType] = useToggle<'inline', 'block'>(
    ['inline', 'block'],
    initialBox
  )

  const convertFn = () => {
    const action: UpdateAction = {
      type: 'UPDATE',
      args: { id, diff: { boxType: nextBoxType } },
    }
    dispatch(action)
    toggleBoxType()
  }

  return (
    <li>
      <Button onClick={convertFn}>To {_.upperFirst(nextBoxType)}</Button>
    </li>
  )
}
