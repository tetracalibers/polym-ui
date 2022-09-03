import { ComponentStory } from '@storybook/react'
import { RatingInput } from '..'
import { defaultProps } from '../model/props'
import { thisArgTypes } from '../model/argTypes'

export default {
  title: 'form control/RatingInput',
  component: RatingInput,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...thisArgTypes,
  },
}

const Template: ComponentStory<typeof RatingInput> = ({ ...args }) => (
  <RatingInput {...args}></RatingInput>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
