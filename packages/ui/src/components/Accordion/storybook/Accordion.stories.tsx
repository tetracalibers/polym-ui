import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { nanoid } from 'nanoid'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Accordion } from '../core/Accordion'
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
    openOneOnly: {
      control: {
        type: null,
      },
      description: 'Whether other menus close automatically when opened',
      table: {
        type: {
          summary: 'true | false',
        },
        category: 'application',
        defaultValue: {
          summary: false,
          detail: null,
        },
      },
      type: {
        required: true,
      },
    },
    ...logicArgTypes,
  },
}

const seed = [...new Array(3)].map(() => nanoid())

const Template: ComponentStory<typeof Accordion> = ({ ...args }) => (
  <Accordion openOneOnly={args.openOneOnly}>
    {seed.map((id, idx) => (
      <Panel key={id}>
        <h2>Panel {idx + 1}</h2>
        <LoremIpsum />
      </Panel>
    ))}
  </Accordion>
)

export const normal = Template.bind({})
normal.args = {
  ...defaultProps,
  openOneOnly: false,
}

export const openOneOnly = Template.bind({})
openOneOnly.args = {
  ...defaultProps,
  openOneOnly: true,
}
