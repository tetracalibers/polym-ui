import { ComponentMeta, ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { FlowingButtonProps, presets } from '../model/props'
import { getSelectTypeControlOption, controlType } from 'story-builder'

const controlTypeSelectAs =
  getSelectTypeControlOption<keyof FlowingButtonProps>()

export default {
  title: 'Button/FlowingButton',
  component: FlowingButton,
  argTypes: {
    preset: {
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

export const FormLeft = Template.bind({})
FormLeft.args = {
  children: 'flowing!!',
  preset: 'from-left',
  paddingY: '.5rem',
  paddingX: '1rem',
  fontFamily: 'Aboreto',
  textAlign: 'center',
  borderRadius: '1rem',
}
