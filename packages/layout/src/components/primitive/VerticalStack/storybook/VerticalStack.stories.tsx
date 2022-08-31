import { ComponentStory } from '@storybook/react'
import { VerticalStack } from '..'
import { commmonArgTypes } from '../../../../common/argTypes'
import {
  VerticalStackChild,
  VerticalStackContainer,
} from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/VerticalStack',
  component: VerticalStack,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component:
          'Suitable solution to align elements of the same shape vertically with equal spacing',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Elements to be spaced equally vertically',
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

const Template: ComponentStory<typeof VerticalStack> = ({
  children,
  ...args
}) => (
  <VerticalStack {...args} as={VerticalStackContainer}>
    <VerticalStackChild>Top!!</VerticalStackChild>
    <VerticalStackChild>Middle!!</VerticalStackChild>
    <VerticalStackChild>Bottom!!</VerticalStackChild>
    <VerticalStackChild>
      <VerticalStackChild>Inner Top!!</VerticalStackChild>
      <VerticalStackChild>Inner Middle!!</VerticalStackChild>
      <VerticalStackChild>Inner Bottom!!</VerticalStackChild>
    </VerticalStackChild>
  </VerticalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
