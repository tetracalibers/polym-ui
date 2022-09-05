import { ComponentStory } from '@storybook/react'
import { Text } from '..'

export default {
  title: 'typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: '',
      },
      backgrounds: {
        default: 'white',
      },
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text.DashedLine {...args}>{children}</Text.DashedLine>
)

export const dashedline = Template.bind({})
dashedline.args = {
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
