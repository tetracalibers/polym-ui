import { ComponentStory } from '@storybook/react'
import { DropDownNav } from '..'

export default {
  title: 'naviation/DropDownNav',
  component: DropDownNav,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof DropDownNav> = () => <DropDownNav />

export const sample = Template.bind({})
sample.args = {}
