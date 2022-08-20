import { ComponentStory } from '@storybook/react'
import FlowingButton from '../components/FlowingButton'
import { presets, defaultProps } from '../model/props'
import { cssStoryMeta } from 'story-builder'
// @ts-ignore
import storyDoc from './story-doc.mdx'

export default {
  title: 'Button/FlowingButton',
  component: FlowingButton,
  parameters: {
    docs: {
      //page: storyDoc,
      //inlineStories: true,
    },
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
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
      ...cssStoryMeta.borderWidth,
      type: {
        required: true,
      },
    },
    borderStyle: {
      ...cssStoryMeta.borderStyle,
      type: {
        required: true,
      },
    },
    borderColor: {
      ...cssStoryMeta.borderColor,
      type: {
        required: true,
      },
    },
    color: {
      ...cssStoryMeta.color,
      type: {
        required: true,
      },
    },
    backgroundColor: {
      ...cssStoryMeta.backgroundColor,
      type: {
        required: true,
      },
    },
    transitionDuration: {
      ...cssStoryMeta.transitionDuration,
      type: {
        required: true,
      },
    },
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
