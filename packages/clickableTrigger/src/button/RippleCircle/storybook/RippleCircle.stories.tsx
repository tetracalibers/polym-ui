import { ComponentStory } from '@storybook/react'
import RippleCircle from '../components/RippleCircle'
import { defaultProps } from '../model/props'
import { MdFavorite } from 'react-icons/md'

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
  },
}

const Template: ComponentStory<typeof RippleCircle> = ({
  children,
  ...args
}) => <RippleCircle {...args}>{children}</RippleCircle>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: <MdFavorite size='2rem' />,
}
