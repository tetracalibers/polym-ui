import { ComponentStory } from '@storybook/react'
import { defaultProps, WillZoom, WillZoomProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { StyledBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import type { FC } from 'react'
import { zoomOptions } from '../model/props'

export default {
  title: 'will appear/WillZoom',
  component: WillZoom,
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
    zoom: {
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
          summary: defaultProps.zoom,
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

const Template: ComponentStory<FC<WillZoomProps>> = ({ children, ...args }) => (
  <WillZoom {...args} as={StyledBox}>
    {children}
  </WillZoom>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Zoom!!',
}
playground.argTypes = {
  zoom: {
    control: {
      type: 'radio',
    },
    options: zoomOptions,
  },
}
