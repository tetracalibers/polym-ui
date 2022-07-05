import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from './Text'

export default {
  title: 'base/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = ({ children }) => (
  <Text>{children}</Text>
)

export const Default = Template.bind({})
Default.args = { children: 'tomixyです' }
