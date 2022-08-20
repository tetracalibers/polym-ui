import { ComponentMeta, ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { presets, defaultProps } from '../model/props'
import { controlType, cssPropsDoc } from 'story-builder'
// @ts-ignore
import storyDoc from './story-doc.mdx'

export default {
  title: 'Button/FlowingButton',
  component: FlowingButton,
  parameters: {
    docs: {
      //page: storyDoc,
      inlineStories: true,
    },
  },
  argTypes: {
    children: {
      ...controlType('text'),
      description: 'Button Label',
      table: {
        type: {
          summary: 'string',
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    preset: {
      control: {
        type: 'radio',
      },
      defaultValue: defaultProps.preset,
      description: 'Type of Animation',
      table: {
        type: {
          summary: presets.join(', '),
        },
        defaultValue: {
          summary: defaultProps.preset,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
      options: presets,
    },
    /* 必須 ----------------------------------------- */
    borderWidth: {
      ...cssPropsDoc.borderWidth,
      type: {
        required: true,
      },
    },
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
}

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
