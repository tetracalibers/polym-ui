import { ComponentStory } from '@storybook/react'
import { defaultProps, WillFade, WillFadeProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { TestBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { fadeFromOptions } from '../model/props'
import type { FC } from 'react'

export default {
  title: 'will appear/WillFade',
  component: WillFade,
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
      },
      type: {
        required: true,
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<FC<WillFadeProps>> = ({ children, ...args }) => (
  <WillFade {...args} as={TestBox}>
    {children}
  </WillFade>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {
  fadeFrom: {
    control: {
      type: 'radio',
    },
    options: fadeFromOptions,
  },
}
