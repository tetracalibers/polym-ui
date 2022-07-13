import { ComponentMeta, ComponentStory } from '@storybook/react'
import Balloon from './generated/index'
import { StylePatchProvider } from '@react-polyhex-ui/styling-patch'

export default {
  title: 'mock/Balloon',
  component: Balloon,
} as ComponentMeta<typeof Balloon>

const Template: ComponentStory<typeof Balloon> = ({ children }) => (
  <StylePatchProvider>
    <Balloon>{children}</Balloon>
  </StylePatchProvider>
)

export const Default = Template.bind({})
Default.args = { children: 'tomixyです' }
