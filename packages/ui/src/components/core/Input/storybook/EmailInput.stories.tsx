import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultInputCoreProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Input } from '..'

export default {
  title: 'form control/EmailInput',
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

const EmailTemplate: ComponentStory<typeof Input> = () => (
  <Input>
    <Input.Label>Email Input</Input.Label>
    <Input.Email />
  </Input>
)

export const playground = EmailTemplate.bind({})
playground.args = {
  ...defaultInputCoreProps,
}
