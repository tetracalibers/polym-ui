import { ComponentStory } from '@storybook/react'
import RippleCircle from '../components/RippleCircle'
import { defaultProps } from '../model/props'
import { MdFavorite } from 'react-icons/md'
import { styleArgTypes } from '../css-props/argTypes'

export default {
  title: 'Button/RippleCircle',
  component: RippleCircle,
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Icon to be placed in the center of the circle',
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
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof RippleCircle> = ({
  children,
  ...args
}) => <RippleCircle {...args}>{children}</RippleCircle>

export const exapmle = Template.bind({})
exapmle.args = {
  ...defaultProps,
  children: <MdFavorite size='2rem' />,
}
