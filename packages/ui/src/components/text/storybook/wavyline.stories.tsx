import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextWavyLineStyleProps } from '../model/style'
import { wavylineTextArgTypes } from './argTypes'

export default {
  title: 'text/WavyLine',
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
    ...wavylineTextArgTypes,
  },
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text.WavyLine {...args}>{children}</Text.WavyLine>
)

export const wavyLine = Template.bind({})
wavyLine.args = {
  ...defaultTextWavyLineStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
