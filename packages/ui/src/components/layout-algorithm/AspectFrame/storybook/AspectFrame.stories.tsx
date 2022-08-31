import { ComponentStory } from '@storybook/react'
import { AspectFrame } from '..'
import { commmonArgTypes } from '../../../../types/argTypes'
import { AFrameContainer } from '../../../../mock/TestBox'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sampleImage01 from './image/sample01.jpg'

export default {
  title: 'layout/AspectFrame',
  component: AspectFrame,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component:
          'Suitable solution to crop the media to the specified aspect ratio',
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
  },
}

const Template: ComponentStory<typeof AspectFrame> = ({
  children,
  ...args
}) => (
  <AspectFrame {...args} as={AFrameContainer}>
    <img src={sampleImage01} />
  </AspectFrame>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
