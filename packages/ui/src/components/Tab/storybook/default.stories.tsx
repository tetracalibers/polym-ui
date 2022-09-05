import { ComponentStory } from '@storybook/react'
import { DocsPage } from './docsPage'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Tab } from '..'
import { FileName } from '../../with-icon/FileName'
import { LeftLineHeading } from '../../heading/LeftLine'
import { coreTabArgTypes } from './argTypes'

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
    ...coreTabArgTypes,
  },
}

const Template: ComponentStory<typeof Tab> = () => (
  <Tab titleStyleFn={(title: string) => <FileName>{title}</FileName>}>
    <Tab.Panel title='html'>
      <LeftLineHeading>HTML</LeftLineHeading>
      <LoremIpsum />
    </Tab.Panel>
    <Tab.Panel title='css'>
      <LeftLineHeading>CSS</LeftLineHeading>
      <LoremIpsum />
    </Tab.Panel>
    <Tab.Panel title='js'>
      <LeftLineHeading>JavaScript</LeftLineHeading>
      <LoremIpsum />
    </Tab.Panel>
  </Tab>
)

export const defaultStyle = Template.bind({})
defaultStyle.args = {}
defaultStyle.argTypes = {}
