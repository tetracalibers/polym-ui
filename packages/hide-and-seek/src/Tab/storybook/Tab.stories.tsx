import { ComponentStory } from '@storybook/react'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { nanoid } from 'nanoid'
import { LoremIpsum } from 'react-lorem-ipsum'
import { TabGroup } from '../core/TabGroup'
const { Tab } = TabGroup

export default {
  title: 'hide-and-seek/Tab',
  component: TabGroup,
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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const seed = [...new Array(3)].map(() => nanoid())

const Template: ComponentStory<typeof TabGroup> = () => (
  <TabGroup>
    {seed.map((id, idx) => (
      <Tab key={id}>
        <h2>Tab {idx + 1}</h2>
        <>
          <h3>Panel {idx + 1}</h3>
          <LoremIpsum />
        </>
      </Tab>
    ))}
  </TabGroup>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
