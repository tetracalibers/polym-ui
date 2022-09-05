import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Tab } from '../'
import { CenterLineHeading } from '../../heading/CenterLine'

export default {
  title: 'hide-and-seek/Tab',
  component: Tab,
  subcomponent: {
    Tab,
  },
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
  },
}

const Template: ComponentStory<typeof Tab> = () => (
  <Tab>
    <Tab.Panel title='html'>
      <CenterLineHeading>HTML</CenterLineHeading>
      <LoremIpsum />
    </Tab.Panel>
    <Tab.Panel title='css'>
      <CenterLineHeading>CSS</CenterLineHeading>
      <LoremIpsum />
    </Tab.Panel>
    <Tab.Panel title='js'>
      <CenterLineHeading>JavaScript</CenterLineHeading>
      <LoremIpsum />
    </Tab.Panel>
  </Tab>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
