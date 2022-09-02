import { ComponentStory } from '@storybook/react'
import { numberArgTypes } from '../model/argTypes'
import { defaultInputCoreProps, defaultNumberInputProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Input } from '..'

export default {
  title: 'form control/NumberInput',
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
    ...numberArgTypes,
  },
}

const NumberTemplate: ComponentStory<typeof Input['Number']> = ({
  stepper,
}) => (
  <Input>
    <Input.Label>Number Input</Input.Label>
    <Input.Number stepper={stepper} />
  </Input>
)

export const playground = NumberTemplate.bind({})
playground.args = {
  ...defaultNumberInputProps,
}
