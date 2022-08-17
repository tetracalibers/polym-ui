import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
  title: 'clickable-trigger/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Hello, world!',
}
