import { ComponentStory } from '@storybook/react'
import { Emphasis } from '..'

export default {
  title: 'markup/Emphasis(em)',
  component: Emphasis,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "em" tag in HTML',
      },
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Emphasis> = ({ children, ...args }) => (
  <Emphasis {...args}>{children}</Emphasis>
)

export const playground = Template.bind({})
playground.args = {
  children: 'Correct Usage',
}

export const violationUsage = Template.bind({})
violationUsage.args = {
  children: <div>I put in a "div" tag.</div>,
}
violationUsage.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}
