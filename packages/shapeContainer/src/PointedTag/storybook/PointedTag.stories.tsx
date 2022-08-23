import { ComponentStory } from '@storybook/react'
import { PointedTag } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextLink } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'shape container/PointedTag',
  component: PointedTag,
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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof PointedTag> = ({ children, ...args }) => (
  <PointedTag {...args} as={DarkTextLink} href='#'>
    {children}
  </PointedTag>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Sample Text',
}
playground.argTypes = {}
