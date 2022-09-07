import { ComponentStory } from '@storybook/react'
import { Text } from '..'

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
  argTypes: {},
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text.WavyLine {...args}>{children}</Text.WavyLine>
)

export const wavyline = Template.bind({})
wavyline.args = {
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
