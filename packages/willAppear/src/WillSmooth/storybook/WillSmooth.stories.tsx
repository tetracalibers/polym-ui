import { ComponentStory } from '@storybook/react'
import { defaultProps, WillSmooth, WillSmoothProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { StyledBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'

export default {
  title: 'will appear/WillSmooth',
  component: WillSmooth,
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

const Template: ComponentStory<FC<WillSmoothProps>> = ({
  children,
  ...args
}) => (
  <WillSmooth {...args} as={StyledBox}>
    {children}
  </WillSmooth>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Smooth!!',
}
