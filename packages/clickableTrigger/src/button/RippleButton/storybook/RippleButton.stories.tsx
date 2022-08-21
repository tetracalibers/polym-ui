import { ComponentStory } from '@storybook/react'
import RippleButton from '../components/RippleButton'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps, trigger } from '../model/props'

export default {
  title: 'Button/RippleButton',
  component: RippleButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Label of button',
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
    trigger: {
      control: {
        type: null,
      },
      defaultValue: defaultProps.trigger,
      description: 'Type of Animation',
      table: {
        type: {
          summary: null,
        },
        defaultValue: {
          summary: defaultProps.trigger,
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

const Template: ComponentStory<typeof RippleButton> = ({
  trigger,
  ...args
}) => <RippleButton trigger={trigger} {...args} />

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Click!',
  trigger: 'click',
}
playground.argTypes = {
  trigger: {
    control: {
      type: 'radio',
    },
    options: trigger,
  },
}

export const click = Template.bind({})
click.args = {
  ...defaultProps,
  children: 'Click!',
  trigger: 'click',
}
