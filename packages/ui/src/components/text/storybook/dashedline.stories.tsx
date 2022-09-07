import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextDashedLineStyleProps } from '../model/style'
import { dashedlineTextArgTypes } from './argTypes'

export default {
  title: 'text/DashedLine',
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
    ...dashedlineTextArgTypes,
  },
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text.DashedLine {...args}>{children}</Text.DashedLine>
)

export const dashedLine = Template.bind({})
dashedLine.args = {
  ...defaultTextDashedLineStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
