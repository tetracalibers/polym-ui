import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { CannotIncludeInteractiveElements } from '../../../../doc/Alert'

export const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <CannotIncludeInteractiveElements />
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </>
)
