import { ComponentStory } from '@storybook/react'
import RippleCircleClick, { defaultProps } from '..'
import { MdFavorite } from 'react-icons/md'
import { styleArgTypes } from '../css-props/argTypes'
import { commmonArgTypes } from '../../common/argTypes'

export default {
  title: 'Button&Link/RippleCircleClick',
  component: RippleCircleClick,
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
    ...commmonArgTypes,
  },
}

const Template: ComponentStory<typeof RippleCircleClick> = ({
  children,
  ...args
}) => <RippleCircleClick {...args}>{children}</RippleCircleClick>

export const exapmle = Template.bind({})
exapmle.args = {
  ...defaultProps,
  children: <MdFavorite size='2rem' />,
}
