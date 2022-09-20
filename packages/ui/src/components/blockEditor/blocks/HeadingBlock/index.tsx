import { FloatLabelTextarea } from '../FloatLabelTextarea'
import { GroupPanel } from '../GroupPanel'

export type HeadingBlockProps = {
  id: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const HeadingBlock = ({ id, level }: HeadingBlockProps) => {
  return (
    <GroupPanel>
      <FloatLabelTextarea id={id} label={'h' + level} />
    </GroupPanel>
  )
}
