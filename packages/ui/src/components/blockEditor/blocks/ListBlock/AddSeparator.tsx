import { TbCodePlus } from 'react-icons/tb'
import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { IconOnly } from '../../../core/IconOnly'

const SeparatorButton = styled(IconOnly.Button)`
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

export type AddSeparatorProps = {
  addFn: () => void
}

export const AddSeparator = ({ addFn }: AddSeparatorProps) => {
  return (
    <SeparatorButton
      icon={<TbCodePlus />}
      label='add list item'
      onClick={addFn}
    />
  )
}
