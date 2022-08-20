import { ComponentMeta, ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { presets, defaultProps } from '../model/props'
import { cssPropsDoc } from 'story-builder'

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
    /* 必須 ----------------------------------------- */
    ...cssPropsDoc.borderWidth,
    ...cssPropsDoc.borderStyle,
    ...cssPropsDoc.borderColor,
    ...cssPropsDoc.color,
    ...cssPropsDoc.backgroundColor,
    ...cssPropsDoc.transitionDuration,
    /* オプション -------------------------------------- */
    ...cssPropsDoc.fontFamily,
    ...cssPropsDoc.paddingX,
    ...cssPropsDoc.paddingY,
    ...cssPropsDoc.textAlign,
    ...cssPropsDoc.borderRadius,
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
  borderWidth: defaultProps.borderWidth,
  borderColor: defaultProps.borderColor,
  borderStyle: defaultProps.borderStyle,
  color: defaultProps.color,
  backgroundColor: defaultProps.backgroundColor,
  transitionDuration: defaultProps.transitionDuration,
  paddingY: '.5rem',
  paddingX: '1rem',
  fontFamily: 'Aboreto',
  textAlign: 'center',
  borderRadius: '1rem',
}
