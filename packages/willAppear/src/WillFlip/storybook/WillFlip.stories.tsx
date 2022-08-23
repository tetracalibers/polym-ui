import { ComponentStory } from '@storybook/react'
import { WillFlip, WillFlipProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { FillBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'
import { defaultProps, flipToOptions } from '../model/props'

export default {
  title: 'will appear/WillFlip',
  component: WillFlip,
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
    flipTo: {
      control: {
        type: null,
      },
      description: 'In which direction the elements appear while flipping',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: defaultProps.flipTo,
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

const Template: ComponentStory<typeof WillFlip> = ({ children, ...args }) => (
  <WillFlip {...args} as={FillBox}>
    {children}
  </WillFlip>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Flip!!',
}
playground.argTypes = {
  flipTo: {
    control: {
      type: 'radio',
    },
    options: flipToOptions,
  },
}
