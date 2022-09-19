import { ComponentStory } from '@storybook/react'
import { EditPanel } from '../styled/panel'
import { Dropzone } from '../blocks/ImageUploader/Dropzone'

export default {
  title: 'editor/Dropzone',
  component: Dropzone,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "strong" tag in HTML',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Dropzone> = ({ ...args }) => (
  <EditPanel>
    <Dropzone {...args} />
  </EditPanel>
)

export const dropzone = Template.bind({})
dropzone.args = {}
