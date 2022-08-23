import { ComponentStory } from '@storybook/react'
import { BlowingTag } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { LightTextBox, LightTextLink } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps, tailPosOptions } from '../model/props'

export default {
  title: 'shape container/BlowingTag',
  component: BlowingTag,
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
    tailPos: {
      control: {
        type: null,
      },
      description: 'Which side is attached to the arrow part of the balloon',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: defaultProps.tailPos,
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

const Template: ComponentStory<typeof BlowingTag> = ({ children, ...args }) => (
  <BlowingTag {...args} as={LightTextBox}>
    {children}
  </BlowingTag>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Example Text',
}
playground.argTypes = {
  tailPos: {
    control: {
      type: 'radio',
    },
    options: tailPosOptions,
  },
}
