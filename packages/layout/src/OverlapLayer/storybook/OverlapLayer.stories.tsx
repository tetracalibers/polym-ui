import { ComponentStory } from '@storybook/react'
import { OverlapLayer } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import {
  DummyText1000W,
  DummyText25W,
  DummyText50W,
} from '../../mock/DummyText'
import { OverlayBox, Container } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
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

export const scrollTrackingSample = Template.bind({})
scrollTrackingSample.args = {
  ...defaultProps,
  children: <DummyText1000W />,
}

export const overflowSample = Template.bind({})
overflowSample.args = {
  ...defaultProps,
  children: <DummyText25W />,
}
