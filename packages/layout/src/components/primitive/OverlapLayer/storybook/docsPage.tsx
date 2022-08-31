import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

export const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <ArgsTable story={PRIMARY_STORY} />
  </>
)
