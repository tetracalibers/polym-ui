import { ComponentStory } from '@storybook/react'
import { WillFade } from '..'
import { FillBox } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps, fadeFromOptions } from '../model/props'

export default {
  title: 'will appear/WillFade',
  component: WillFade,
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
    fadeFrom: {
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
          summary: defaultProps.fadeFrom,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof WillFade> = ({ children, ...args }) => (
  <WillFade {...args} as={FillBox}>
    {children}
  </WillFade>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {
  fadeFrom: {
    control: {
      type: 'radio',
    },
    options: fadeFromOptions,
  },
}
