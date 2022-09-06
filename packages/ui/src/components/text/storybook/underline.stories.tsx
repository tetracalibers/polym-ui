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
  <Text.SolidLine {...args}>{children}</Text.SolidLine>
)

export const solidline = Template.bind({})
solidline.args = {
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
