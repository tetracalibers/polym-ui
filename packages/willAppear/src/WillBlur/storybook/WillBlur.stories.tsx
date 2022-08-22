import { ComponentStory } from '@storybook/react'
import { defaultProps, WillBlur, WillBlurProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { StyledBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'

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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<FC<WillBlurProps>> = ({ children, ...args }) => (
  <WillBlur {...args} as={StyledBox}>
    {children}
  </WillBlur>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Blur!!',
}
