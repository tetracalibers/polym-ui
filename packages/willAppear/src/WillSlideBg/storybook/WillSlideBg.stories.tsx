import { ComponentStory } from '@storybook/react'
import { defaultProps, WillSlideBg, WillSlideBgProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'
import { slideFromOptions } from '../model/props'

export default {
  title: 'will appear/WillSlideBg',
  component: WillSlideBg,
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
    slideFrom: {
      control: {
        type: null,
      },
      description: 'Which direction the background will come from',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: defaultProps.slideFrom,
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

const Template: ComponentStory<FC<WillSlideBgProps>> = ({
  children,
  ...args
}) => (
  <WillSlideBg {...args} as={DarkTextBox}>
    {children}
  </WillSlideBg>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'SlideBack!!',
}
playground.argTypes = {
  slideFrom: {
    control: {
      type: 'radio',
    },
    options: slideFromOptions,
  },
}
