import { VerticalStack } from '../../../layout-algorithm/VerticalStack'
import { GroupPanel } from '../GroupPanel'
import { DetailEditor } from './DetailEditor'
import { SummaryEditor } from './SummaryEditor'

export type ToggleBlockProps = {
  id: string
}

export const ToggleBlock = ({ id }: ToggleBlockProps) => {
  return (
    <VerticalStack as={GroupPanel} spaceV={0.75}>
      <SummaryEditor id={id} />
      <DetailEditor id={id} />
    </VerticalStack>
  )
}
