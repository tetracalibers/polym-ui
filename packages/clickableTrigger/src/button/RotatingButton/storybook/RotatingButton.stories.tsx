import { ComponentStory } from '@storybook/react'
import RotatingButton from '../components/RotatingButton'
import { defaultProps, rotateTo } from '../model/props'
import { cssStoryMeta } from 'story-builder'
import _ from 'lodash'
import { substyleArgTypes } from '../../substyle/argTypes'

export default {
  title: 'Button/RotatingButton',
  component: RotatingButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Button Label',
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
    rotateTo: {
      control: {
        type: 'radio',
      },
      defaultValue: defaultProps.rotateTo,
      description: 'Type of Animation',
      table: {
        type: {
          summary: null,
        },
        defaultValue: {
          summary: defaultProps.rotateTo,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
      options: rotateTo,
    },
    /* 必須 ----------------------------------------- */
    borderWidth: {
      ...cssStoryMeta.borderWidth,
      type: {
        required: true,
      },
    },
    borderStyle: {
      ...cssStoryMeta.borderStyle,
      type: {
        required: true,
      },
    },
    borderColor: {
      ...cssStoryMeta.borderColor,
      type: {
        required: true,
      },
    },
    color: {
      ...cssStoryMeta.color,
      type: {
        required: true,
      },
    },
    backgroundColor: {
      ...cssStoryMeta.backgroundColor,
      type: {
        required: true,
      },
    },
    ...substyleArgTypes,
  },
}

const Template: ComponentStory<typeof RotatingButton> = ({
  children,
  rotateTo,
  ...args
}) => (
  <RotatingButton rotateTo={rotateTo} {...args}>
    {children}
  </RotatingButton>
)

export const basic = Template.bind({})
basic.args = {
  ...defaultProps,
  children: 'Rotating!!',
  rotateTo: 'front',
}
