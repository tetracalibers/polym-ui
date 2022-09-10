import { ComponentStory } from '@storybook/react'
import { BlockEditor } from '..'

export default {
  title: 'editor/BlockEditor',
  component: BlockEditor,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "strong" tag in HTML',
      },
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof BlockEditor> = () => <BlockEditor />

export const blockEditor = Template.bind({})
blockEditor.args = {}
