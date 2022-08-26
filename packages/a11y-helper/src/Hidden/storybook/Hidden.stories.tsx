import { ComponentStory } from '@storybook/react'
import { Hidden } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'a11y helper/Hidden',
  component: Hidden,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Complete concealment for all users',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Child elements of the element you want to hide',
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
    as: {
      ...commmonArgTypes.as,
      description: 'Specify elements to be hidden',
    },
  },
}

const Template: ComponentStory<typeof Hidden> = ({ children, ...args }) => (
  <Hidden {...args} as={DarkTextBox}>
    {children}
  </Hidden>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
