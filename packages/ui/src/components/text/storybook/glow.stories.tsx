import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextGlowStyleProps } from '../model/style'
import { glowTextArgTypes } from './argTypes'

export default {
  title: 'text/Glow',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    ...glowTextArgTypes,
  },
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text.Glow {...args}>{children}</Text.Glow>
)

export const glow = Template.bind({})
glow.args = {
  ...defaultTextGlowStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
