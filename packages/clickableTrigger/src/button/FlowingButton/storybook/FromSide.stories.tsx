import { ComponentMeta, ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { presets } from '../model/props'

export default {
  title: 'Button/FlowingButton',
  component: FlowingButton,
  argTypes: {
    from: {
      control: {
        type: 'radio',
      },
      options: presets,
    },
  },
} as ComponentMeta<typeof FlowingButton>

const Template: ComponentStory<typeof FlowingButton> = ({
  children,
  preset,
  ...args
}) => (
  <FlowingButton preset={preset} {...args}>
    {children}
  </FlowingButton>
)

export const Left = Template.bind({})
Left.args = {
  children: 'From Left',
  preset: 'from-left',
}
