import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultInputCoreProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Input } from '..'

export default {
  title: 'form control/Input',
  component: Input,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...coreArgTypes,
  },
}

/* -------------------------------------------- */

const TextTemplate: ComponentStory<typeof Input> = () => (
  <Input>
    <Input.Label>Text Input</Input.Label>
    <Input.Text />
  </Input>
)

export const textInput = TextTemplate.bind({})
textInput.args = {
  ...defaultInputCoreProps,
}

/* -------------------------------------------- */

const NumberTemplate: ComponentStory<typeof Input> = () => (
  <Input>
    <Input.Label>Number Input</Input.Label>
    <Input.Number />
  </Input>
)

export const numberInput = NumberTemplate.bind({})
numberInput.args = {
  ...defaultInputCoreProps,
}
