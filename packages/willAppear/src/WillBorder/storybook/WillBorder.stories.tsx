import { ComponentStory } from '@storybook/react'
import { defaultProps, WillBorder, WillBorderProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { StyledBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'

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
    fadeFrom: {
      control: {
        type: null,
      },
      description: 'Which direction the elements appear from',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: '', // TODO
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<FC<WillBorderProps>> = ({
  children,
  ...args
}) => (
  <WillBorder {...args} as={StyledBox}>
    {children}
  </WillBorder>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Border!!',
}
playground.argTypes = {}
