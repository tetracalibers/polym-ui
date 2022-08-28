import { ComponentStory } from '@storybook/react'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { nanoid } from 'nanoid'

import { TabGroup } from '../core/TabGroup'
import { DummyText50W } from '../../mock/DummyText'
const { Tab, TabList, Panel } = TabGroup

export default {
  title: 'hide-and-seek/Tab',
  component: TabGroup,
  subcomponent: {
    Tab,
    TabList,
    Panel,
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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const seed = [...new Array(3)].map(() => nanoid())
const generateTabId = (panelId: string) => `tab-for-${panelId}`

const Template: ComponentStory<typeof TabGroup> = () => (
  <TabGroup>
    <TabList>
      {seed.map((id, idx) => {
        const thisId = generateTabId(id)
        return (
          <Tab id={thisId} key={thisId} panelId={id}>
            Tab {idx + 1}
          </Tab>
        )
      })}
    </TabList>
    {seed.map((id, idx) => (
      <Panel key={id} tabId={generateTabId(id)} id={id}>
        <h2>Panel {idx + 1}</h2>
        <DummyText50W />
      </Panel>
    ))}
  </TabGroup>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
