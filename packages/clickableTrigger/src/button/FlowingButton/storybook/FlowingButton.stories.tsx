import { ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { presets, defaultProps } from '../model/props'
import { cssStoryMeta } from 'story-builder'
import _ from 'lodash'
import { substyleArgTypes } from '../../substyle/argTypes'

export default {
  title: 'Button/FlowingButton',
  component: FlowingButton,
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
    preset: {
      control: {
        type: 'radio',
      },
      defaultValue: defaultProps.preset,
      description: 'Type of Animation',
      table: {
        type: {
          summary: null,
        },
        defaultValue: {
          summary: defaultProps.preset,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
      options: presets,
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
    transitionDuration: {
      ...cssStoryMeta.transitionDuration,
      type: {
        required: true,
      },
    },
    ...substyleArgTypes,
  },
}

const Template: ComponentStory<typeof FlowingButton> = ({
  children,
  preset,
  ...args
}) => (
  <FlowingButton preset={preset} {...args}>
    {children}
  </FlowingButton>
)

export const FormLeft = Template.bind({})
FormLeft.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'from-left',
}
