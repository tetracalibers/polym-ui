import { ComponentStory } from '@storybook/react'
import { VerticalCenter } from '..'
import { commmonArgTypes } from '../../../../types/argTypes'
import { VCenterContainer, VCenterChild } from '../../../../mock/TestBox'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/VerticalCenter',
  component: VerticalCenter,
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
      description:
        'Elements to be vertically centered within a specific area and the elements contained in that area',
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
  },
}

const Template: ComponentStory<typeof VerticalCenter> = ({
  children,
  ...args
}) => (
  <VerticalCenter {...args} as={VCenterContainer}>
    {[...new Array(5)].map((_, idx) => {
      return <VCenterChild key={idx}>{idx + 1}th Item!!</VCenterChild>
    })}
  </VerticalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
