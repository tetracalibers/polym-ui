import { ComponentStory } from '@storybook/react'
import { GenericInput } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps, typeOptions } from '../model/props'

export default {
  title: 'form control/GenericInput',
  component: GenericInput,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: typeOptions,
      description: 'HTML input element type attribute',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: defaultProps.type,
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

const Template: ComponentStory<typeof GenericInput> = ({ ...args }) => (
  <GenericInput {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
