import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { ToFilledClick } from '..'
import { DarkTextBox } from '../../../../mock/TestBox'
import { VerticalStack } from '../../../layout-algorithm/VerticalStack'

export default {
  title: 'core/ToFilledClick',
  component: ToFilledClick,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Component that wraps the "button" tag in HTML',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
  },
}

const Template: ComponentStory<typeof ToFilledClick> = ({
  children,
  ...args
}) => <ToFilledClick {...args}>{children}</ToFilledClick>

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
