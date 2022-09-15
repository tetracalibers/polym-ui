import { BoxType } from '../module/config'

export type ChangeBoxTypeMenuProps = {
  allowBox: BoxType
  currBox: Omit<BoxType, 'both'>
}

export const ChangeBoxTypeMenu = ({
  allowBox,
  currBox,
}: ChangeBoxTypeMenuProps) => {
  const boxTypeOption =
    allowBox === 'both'
      ? currBox === 'inline'
        ? 'To Block'
        : 'To Inline'
      : null

  return boxTypeOption && <li>{boxTypeOption}</li>
}
