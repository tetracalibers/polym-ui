import { ComponentStory } from '@storybook/react'
import { WillBlur } from '..'
import { FillBox } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'will appear/WillBlur',
  component: WillBlur,
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
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof WillBlur> = ({ children, ...args }) => (
  <WillBlur {...args} as={FillBox}>
    {children}
  </WillBlur>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Blur!!',
}
