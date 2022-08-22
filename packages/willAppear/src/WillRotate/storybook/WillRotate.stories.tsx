import { ComponentStory } from '@storybook/react'
import { defaultProps, WillRotate, WillRotateProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { StyledBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'
import { rotateOptions } from '../model/props'

export default {
  title: 'will appear/WillRotate',
  component: WillRotate,
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
    rotate: {
      control: {
        type: null,
      },
      description: 'Around which axis the elements appear as they rotate',
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

const Template: ComponentStory<FC<WillRotateProps>> = ({
  children,
  ...args
}) => (
  <WillRotate {...args} as={StyledBox}>
    {children}
  </WillRotate>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Rotate!!',
}
playground.argTypes = {
  rotate: {
    control: {
      type: 'radio',
    },
    options: rotateOptions,
  },
}
