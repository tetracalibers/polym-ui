import { ComponentStory } from '@storybook/react'
import { WillBorder } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'will appear/WillBorder',
  component: WillBorder,
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

const Template: ComponentStory<typeof WillBorder> = ({ children, ...args }) => (
  <WillBorder {...args} as={DarkTextBox}>
    {children}
  </WillBorder>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Border!!',
}
