import { ComponentStory } from '@storybook/react'
import { MediaObject } from '..'
import { commmonArgTypes } from '../../../../common/argTypes'
import { DarkTextBox } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { WithSidebar } from '../../../primitive/WithSidebar'

export default {
  title: 'layout pettern/MediaObject',
  component: MediaObject,
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

const DivElemt = () => <div>sample</div>
const ImgElemt = () => <img>sample</img>

const Template: ComponentStory<typeof MediaObject> = ({
  children,
  ...args
}) => (
  <MediaObject {...args} as={ImgElemt}>
    {children}
  </MediaObject>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
