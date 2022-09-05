import { ComponentStory } from '@storybook/react'
import { DocsPage } from './docsPage'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Tab } from '../'
import { FileName } from '../../with-icon/FileName'
import { LeftLineHeading } from '../../heading/LeftLine'
import { borderLinkListArgTypes } from '../../LinkList/storybook/argTypes'
import { defaultBorderLinkListProps } from '../../LinkList'

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
    ...borderLinkListArgTypes,
  },
}

const Template: ComponentStory<typeof Tab> = ({ ...args }) => (
  <Tab
    titleStyleFn={(title: string) => <FileName>{title}</FileName>}
    titleTabListTheme={'Border'}
    {...args}
  >
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

export const border = Template.bind({})
// @ts-ignore
border.args = {
  ...defaultBorderLinkListProps,
}
