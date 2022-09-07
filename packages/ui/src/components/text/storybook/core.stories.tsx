import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextBaseStyleProps } from '../model/style'
import { textArgTypes } from './argTypes'

export default {
  title: 'Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    ...textArgTypes,
  },
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text {...args}>{children}</Text>
)

export const core = Template.bind({})
core.args = {
  ...defaultTextBaseStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
