import { FloatLabelTextarea } from '../../reusable/FloatLabel/FloatLabelTextarea'
import { GroupPanel } from '../style/GroupPanel'

export type HeadingBlockProps = {
  id: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}

export const HeadingBlock = ({ id, level, text }: HeadingBlockProps) => {
  return (
    <GroupPanel>
      <FloatLabelTextarea id={id} label={'h' + level} value={text ?? ''} />
    </GroupPanel>
  )
}
