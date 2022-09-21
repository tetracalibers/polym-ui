import { VerticalStack } from '../../../layout-algorithm/VerticalStack'
import { FormatArgs } from '../../types/FormatArgs'
import { GroupPanel } from '../../dedicated/GroupPanel'
import { DetailEditor } from './DetailEditor'
import { SummaryEditor } from './SummaryEditor'

export type ToggleBlockProps = {
  id: string
  value: FormatArgs['toggle']
}

export const ToggleBlock = ({ id, value }: ToggleBlockProps) => {
  return (
    <VerticalStack as={GroupPanel} spaceV={0.75}>
      <SummaryEditor id={id} value={value.summary ?? ''} />
      <DetailEditor id={id} value={value.input ?? ''} />
    </VerticalStack>
  )
}
