import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultInputCoreProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Input } from '..'

export default {
  title: 'form control/TextInput',
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

export const playground = TextTemplate.bind({})
playground.args = {
  ...defaultInputCoreProps,
}
