import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Button } from '..'
import { DarkTextBox } from '../../../../mock/TestBox'
import { VerticalStack } from '../../../layout-algorithm/VerticalStack'

export default {
  title: 'core/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Correct Usage',
}

export const violationUsage01 = Template.bind({})
violationUsage01.args = {
  ...defaultProps,
  children: <a>Examples of Violations</a>,
}
violationUsage01.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}