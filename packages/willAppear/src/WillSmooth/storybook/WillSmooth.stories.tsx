import { ComponentStory } from '@storybook/react'
import { WillSmooth } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { FillBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'will appear/WillSmooth',
  component: WillSmooth,
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

const Template: ComponentStory<typeof WillSmooth> = ({ children, ...args }) => (
  <WillSmooth {...args} as={FillBox}>
    {children}
  </WillSmooth>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Smooth!!',
}
