import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { editInputStyle } from '../../styled/editInput'
import { GroupPanel } from '../GroupPanel'
import { ResetCss } from 'styled-utility-first'
import { TbCodePlus } from 'react-icons/tb'
import * as Local from '../reducer/addmore.reducer'
import * as Global from '../../module/reducer'
import { useReducer, useContext, ChangeEvent, useEffect } from 'react'
import { BlockEditorContext } from '../..'

const Ul = styled.ul`
  padding-left: 1rem;
  margin: 0;
`

const Li = styled.li`
  padding-left: 0.5rem;
`

const Input = styled.input`
  ${editInputStyle}

  background-color: rgba(255,255,255,0.4);
  box-shadow: none;

  width: 100%;
  padding: 1rem;

  margin-bottom: 1rem;
`

const AddSeparator = styled(IconOnly.Button)`
  ${ResetCss.button}

  --color: rgb(96,125,139);
  --gap: 0.5rem;
  --icon-size: 2rem;

  color: var(--color);
  display: flex;
  align-items: center;
  width: 100%;

  & svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px dashed var(--color);
  }

  &::before {
    margin-right: var(--gap);
  }

  &::after {
    margin-left: var(--gap);
  }
`

export type UListBlockProps = {
  id: string
}

export const UListBlock = ({ id }: UListBlockProps) => {
  const [items, localDispatch] = useReducer(Local.reducer, [])
  const { dispatch: globalDispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>, pos: number) => {
    const localAction: Local.UpdateAction = {
      type: 'UPDATE',
      args: {
        pos,
        item: e.target.value,
      },
    }
    localDispatch(localAction)
  }

  useEffect(() => {
    const globalAction: Global.UpdateAction<'ulist'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          items,
        },
      },
    }
    globalDispatch(globalAction)
  }, [items])

  const addFn = () => {
    const localAction: Local.AddAction = {
      type: 'ADD',
      args: {},
    }
    localDispatch(localAction)
  }

  return (
    <GroupPanel>
      <Ul>
        {items.map((item, idx) => (
          <Li>
            <Input
              value={item}
              key={`${id}_${idx}`}
              onChange={e => updateFn(e, idx)}
            />
          </Li>
        ))}
      </Ul>
      <AddSeparator
        icon={<TbCodePlus />}
        label='add list item'
        onClick={addFn}
      />
    </GroupPanel>
  )
}
