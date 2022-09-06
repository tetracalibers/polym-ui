import { ComponentStory } from '@storybook/react'
import { DocsPage } from '../docsPage'
import { Button } from '../..'
import { DarkTextBox } from '../../../../../mock/TestBox'
import { VerticalStack } from '../../../../layout-algorithm/VerticalStack'
import { buttonArgTypes } from './argTypes'
import { defaultButtonCharacterProps } from '../../model/button'

export default {
  title: 'core/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Component that wraps the "button" tag in HTML',
      },
    },
  },
  argTypes: {
    ...buttonArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultButtonCharacterProps,
  children: 'Correct Usage',
}

export const violationUsage01 = Template.bind({})
violationUsage01.args = {
  ...defaultButtonCharacterProps,
  children: <a>Examples of Violations</a>,
}
violationUsage01.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}
