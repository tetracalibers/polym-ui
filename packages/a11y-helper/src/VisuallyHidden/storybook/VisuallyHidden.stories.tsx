import { ComponentStory } from '@storybook/react'
import { VisuallyHidden } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'a11y helper/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Child elements of the element specified by as props',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...logicArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof VisuallyHidden> = ({
  children,
  ...args
}) => (
  <VisuallyHidden {...args} as={DarkTextBox}>
    {children}
  </VisuallyHidden>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
