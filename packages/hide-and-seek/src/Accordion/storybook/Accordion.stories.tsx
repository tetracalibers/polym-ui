import { ComponentStory } from '@storybook/react'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { nanoid } from 'nanoid'

import { Accordion } from '../core/Accordion'
import { DummyText50W } from '../../mock/DummyText'
const { Panel } = Accordion

export default {
  title: 'hide-and-seek/Accordion',
  component: Accordion,
  subcomponent: {
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

const Template: ComponentStory<typeof Accordion> = () => (
  <Accordion>
    {seed.map((id, idx) => (
      <Panel key={id}>
        <h2>Panel {idx + 1}</h2>
        <DummyText50W />
      </Panel>
    ))}
  </Accordion>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}