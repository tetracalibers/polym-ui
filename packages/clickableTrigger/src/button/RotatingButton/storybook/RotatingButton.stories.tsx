import { ComponentStory } from '@storybook/react'
import RotatingButton from '../components/RotatingButton'
import { defaultProps, rotateTo } from '../model/props'
import _ from 'lodash'
import { substyleArgTypes } from '../../FlowingButton/css-props/argTypes'

export default {
  title: 'Button/RotatingButton',
  component: RotatingButton,
  argTypes: {
    beforeChild: {
      control: {
        type: 'text',
      },
      description: 'Label of button before rotation',
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
    afterChild: {
      control: {
        type: 'text',
      },
      description: 'Label of button after rotation',
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
    ...substyleArgTypes,
  },
}

const Template: ComponentStory<typeof RotatingButton> = ({
  rotateTo,
  ...args
}) => <RotatingButton rotateTo={rotateTo} {...args} />

export const basic = Template.bind({})
basic.args = {
  ...defaultProps,
  beforeChild: 'Before Rotating!!',
  afterChild: 'After Rotating!!',
  rotateTo: 'front',
}
