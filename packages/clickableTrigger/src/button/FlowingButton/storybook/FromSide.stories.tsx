import { ComponentMeta, ComponentStory } from '@storybook/react'
import FlowBackFromFourSidedButton from '../components/FromSide'

export default {
  title: 'Button/FlowingButton',
  component: FlowBackFromFourSidedButton,
  argTypes: {
    from: {
      control: {
        type: 'radio',
      },
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
} as ComponentMeta<typeof FlowBackFromFourSidedButton>

const Template: ComponentStory<typeof FlowBackFromFourSidedButton> = ({
  children,
  from,
  ...args
}) => (
  <FlowBackFromFourSidedButton from={from} {...args}>
    {children}
  </FlowBackFromFourSidedButton>
)

export const Left = Template.bind({})
Left.args = {
  children: 'From Left',
  from: 'left',
}
