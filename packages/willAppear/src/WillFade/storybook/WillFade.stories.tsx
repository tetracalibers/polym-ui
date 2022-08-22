import { ComponentStory } from '@storybook/react'
import WillFade, { defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'

export default {
  title: 'will appear/WillFade',
  component: WillFade,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'label',
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

const Template: ComponentStory<typeof WillFade> = ({ children, ...args }) => (
  <WillFade {...args}>{children}</WillFade>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Press!!',
}
playground.argTypes = {}
