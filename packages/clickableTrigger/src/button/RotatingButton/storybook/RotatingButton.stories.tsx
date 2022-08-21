import { ComponentStory } from '@storybook/react'
import RotatingButton from '../components/RotatingButton'
import { defaultProps, rotateTo } from '../model/props'
import _ from 'lodash'
import { styleArgTypes } from '../css-props/argTypes'

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
        type: null,
      },
      defaultValue: defaultProps.rotateTo,
      description: 'Type of Animation',
      table: {
        type: {
          summary: 'Click to view all options',
          detail: rotateTo.join(' | '),
        },
        defaultValue: {
          summary: defaultProps.rotateTo,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof RotatingButton> = ({
  rotateTo,
  ...args
}) => <RotatingButton rotateTo={rotateTo} {...args} />

export const front = Template.bind({})
front.args = {
  ...defaultProps,
  beforeChild: 'Before Rotating!!',
  afterChild: 'After Rotating!!',
  rotateTo: 'front',
}

export const back = Template.bind({})
back.args = {
  ...defaultProps,
  beforeChild: 'Before Rotating!!',
  afterChild: 'After Rotating!!',
  rotateTo: 'back',
}
