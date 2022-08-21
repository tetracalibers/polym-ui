import { ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { presets, defaultProps } from '../model/props'
import _ from 'lodash'
import { styleArgTypes } from '../css-props/argTypes'

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
    ...styleArgTypes,
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

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'from-left',
}
