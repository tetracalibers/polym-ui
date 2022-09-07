import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextFireStyleProps } from '../model/style'
import { glowTextArgTypes } from './argTypes'

export default {
  title: 'text/Fire',
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
  <Text.Fire {...args}>{children}</Text.Fire>
)

export const fire = Template.bind({})
fire.args = {
  ...defaultTextFireStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
