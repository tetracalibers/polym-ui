import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultInputCoreProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Input } from '..'

export default {
  title: 'core/Input',
  component: Input,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Component that wraps the "button" tag in HTML',
      },
    },
  },
  argTypes: {
    ...coreArgTypes,
  },
}

const Template: ComponentStory<typeof Input> = ({ children, ...args }) => (
  <Input {...args}>
    <Input.Label>Sample Input</Input.Label>
    <Input.Text />
  </Input>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultInputCoreProps,
}
