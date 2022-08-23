import { ComponentStory } from '@storybook/react'
import { BlowingTag } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { LightTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'will appear/BlowingTag',
  component: BlowingTag,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Child elements of the element specified by as props',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof BlowingTag> = ({ children, ...args }) => (
  <BlowingTag {...args} as={LightTextBox}>
    {children}
  </BlowingTag>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Example Text',
}
playground.argTypes = {}
