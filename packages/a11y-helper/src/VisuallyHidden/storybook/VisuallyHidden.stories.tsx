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
        component:
          'Visually hide elements while allowing them to be read out loud to screen reader users upon focus',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Child elements of the element specified in as props',
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
      description:
        'Specify which elements you want to hide for clear-eyed users',
    },
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
