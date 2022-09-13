import { ComponentStory } from '@storybook/react'
import { FloatLabelInput } from '../blocks/FloatLabelInput'
import { EditPanel } from '../styled/panel'

export default {
  title: 'editor/FloatLabelInput',
  component: FloatLabelInput,
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

const Template: ComponentStory<typeof FloatLabelInput> = () => (
  <EditPanel>
    <FloatLabelInput id={'id'} label={'float label'} />
  </EditPanel>
)

export const floatLabelInput = Template.bind({})
floatLabelInput.args = {}
