import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextCloudStyleProps } from '../model/style'
import { glowTextArgTypes } from './argTypes'

export default {
  title: 'text/Cloud',
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
  <Text.Cloud {...args}>{children}</Text.Cloud>
)

export const cloud = Template.bind({})
cloud.args = {
  ...defaultTextCloudStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
