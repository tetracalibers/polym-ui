import { ComponentStory } from '@storybook/react'
import { EditPanel } from '../dedicated/EditPanel'
import { FloatLabelInput } from '../reusable/FloatLabel/Input'

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
      default: 'dark',
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
