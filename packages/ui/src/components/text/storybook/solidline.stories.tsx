import { ComponentStory } from '@storybook/react'
import { Text } from '..'
import { defaultTextSolidlineStyleProps } from '../model/style'
import { solidlineTextArgTypes } from './argTypes'

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
    ...solidlineTextArgTypes,
  },
}

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text.SolidLine {...args}>{children}</Text.SolidLine>
)

export const solidline = Template.bind({})
solidline.args = {
  ...defaultTextSolidlineStyleProps,
  children:
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds',
}
