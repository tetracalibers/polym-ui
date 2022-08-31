import { ComponentStory } from '@storybook/react'
import { DifferStack } from '..'
import { commmonArgTypes } from '../../../../types/argTypes'
import { DStackContainer, DStackChild } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/DifferStack',
  component: DifferStack,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component:
          'Suitable solution to arrange elements of different shapes respectively',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Elements to be aligned',
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

const Template: ComponentStory<typeof DifferStack> = ({
  children,
  ...args
}) => (
  <DifferStack {...args} as={DStackContainer}>
    <DStackChild>My Website</DStackChild>
    <DStackChild>About</DStackChild>
    <DStackChild>Blog</DStackChild>
    <DStackChild>Shop</DStackChild>
    <DStackChild>Contact</DStackChild>
    <DStackChild>Accessibility</DStackChild>
  </DifferStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
