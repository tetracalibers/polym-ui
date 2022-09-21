import _ from 'lodash'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { BlockEditorContext } from '..'
import { Button } from '../../core/Button/core'
import { Text } from '../../Text'
import { UpdateAction } from '../core/actions'
import { editInputStyle } from '../styled/editInput'

const ConvertButton = styled(Button)`
  && {
    ${editInputStyle}
    font-size: 1rem;
    width: 100%;
    border-radius: 10px;
    display: block;

    cursor: pointer;
    border: none;
    box-shadow: 0px 20px 20px -17px rgba(0, 111, 255, 0.53);
    background: rgb(2, 0, 36);
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 5%,
      rgba(255, 255, 255, 0.5) 6%,
      rgba(255, 255, 255, 0) 9%,
      rgba(255, 255, 255, 0.5) 10%,
      rgba(255, 255, 255, 0) 17%,
      rgba(255, 255, 255, 0.5) 19%,
      rgba(255, 255, 255, 0) 21%
    );
    background-size: 150%;
    background-position: left;
    transition: 1s;
  }

  &&:hover {
    box-shadow: none;
  }
`

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
      <ConvertButton onClick={convertFn}>
        <Text>To {_.upperFirst(nextBoxType)}</Text>
      </ConvertButton>
    </li>
  )
}
