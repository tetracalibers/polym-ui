import { ComponentStory } from '@storybook/react'
import { Important } from '..'

export default {
  title: 'markup/Important(strong)',
  component: Important,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "strong" tag in HTML',
      },
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Important> = ({ children, ...args }) => (
  <Important {...args}>{children}</Important>
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
