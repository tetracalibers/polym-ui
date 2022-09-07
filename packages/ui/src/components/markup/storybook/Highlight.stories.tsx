import { ComponentStory } from '@storybook/react'
import { Highlight } from '..'

export default {
  title: 'markup/Highlight(mark)',
  component: Highlight,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "mark" tag in HTML',
      },
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Highlight> = ({ children, ...args }) => (
  <Highlight {...args}>{children}</Highlight>
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
