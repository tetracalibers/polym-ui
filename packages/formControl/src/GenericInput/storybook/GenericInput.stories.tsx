import { ComponentStory } from '@storybook/react'
import { GenericInput } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'form control/GenericInput',
  component: GenericInput,
  argTypes: {
    //fadeFrom: {
    //  control: {
    //    type: null,
    //  },
    //  description: 'Which direction the elements appear from',
    //  table: {
    //    type: {
    //      summary: null,
    //    },
    //    category: 'character',
    //    defaultValue: {
    //      summary: '', // TODO
    //      details: null,
    //    },
    //  },
    //  type: {
    //    required: true,
    //  },
    //},
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
