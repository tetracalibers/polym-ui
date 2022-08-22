import { ComponentStory } from '@storybook/react'
import { defaultProps, WillPaint, WillPaintProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { InlineBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'

export default {
  title: 'will appear/WillPaint',
  component: WillPaint,
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
    PaintFrom: {
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

const Template: ComponentStory<FC<WillPaintProps>> = ({
  children,
  ...args
}) => (
  <WillPaint {...args} as={InlineBox}>
    {children}
  </WillPaint>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Paint!!',
}
playground.argTypes = {}
