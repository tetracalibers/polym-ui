import { ComponentStory } from '@storybook/react'
import { HorizontalStack } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { HStackChild, HStackContainer } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/HorizontalStack',
  component: HorizontalStack,
  parameters: {
    docs: {
      page: () => <DocsPage />,
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Elements to be equally spaced horizontally',
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

const Template: ComponentStory<typeof HorizontalStack> = ({
  children,
  ...args
}) => (
  <HorizontalStack {...args} as={HStackContainer}>
    <HStackChild>one!!</HStackChild>
    <HStackChild>two!!</HStackChild>
    <HStackChild>three!!</HStackChild>
    <HStackChild>four!!</HStackChild>
    <HStackChild>five!!</HStackChild>
    <HStackChild>six!!</HStackChild>
    <HStackChild>seven!!</HStackChild>
    <HStackChild>eight!!</HStackChild>
    <HStackChild>nine!!</HStackChild>
    <HStackChild>ten!!</HStackChild>
  </HorizontalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
