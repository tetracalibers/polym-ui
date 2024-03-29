import { ComponentStory } from '@storybook/react'
import { OverlapLayer } from '..'
import { commmonArgTypes } from '../../../../types/argTypes'
import {
  DummyText1000W,
  DummyText25W,
  DummyText50W,
} from '../../../../mock/DummyText'
import { OverlayBox, Container } from '../../../../mock/TestBox'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/OverlapLayer',
  component: OverlapLayer,
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
      description: 'Main content in the back',
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
    renderOverlay: {
      control: {
        type: null,
      },
      description:
        'Elements to be overlaid on top of the children in a centered arrangement',
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

const Template: ComponentStory<typeof OverlapLayer> = ({
  children,
  ...args
}) => (
  <OverlapLayer
    {...args}
    as={Container}
    renderOverlay={() => (
      <OverlayBox>
        <DummyText50W />
      </OverlayBox>
    )}
  >
    {children}
  </OverlapLayer>
)

export const overflowSample = Template.bind({})
overflowSample.args = {
  ...defaultProps,
  children: <DummyText25W />,
}

export const scrollTrackingSample = Template.bind({})
scrollTrackingSample.args = {
  ...defaultProps,
  children: <DummyText1000W />,
}
