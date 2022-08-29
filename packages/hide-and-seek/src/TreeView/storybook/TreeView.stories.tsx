import { ComponentStory } from '@storybook/react'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { nanoid } from 'nanoid'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Tree } from '../core/TreeView'
import { ReactNode } from 'react'
const { SubTree, Leaf } = Tree

export default {
  title: 'hide-and-seek/TreeView',
  component: Tree,
  subcomponent: {
    SubTree,
    Leaf,
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

const Template: ComponentStory<typeof Tree> = () => (
  <Tree label={'project_tree'}>
    <h2>My Projects</h2>
    <>
      <SubTree>
        <h3>Projects</h3>
        <>
          <Leaf>project-1.docx</Leaf>
          <Leaf>project-2.docx</Leaf>
          <SubTree>
            <h3>Project 3</h3>
            <>
              <Leaf>project-3A.docx</Leaf>
              <Leaf>project-3B.docx</Leaf>
              <Leaf>project-3C.docx</Leaf>
              <Leaf>project-4.docx</Leaf>
            </>
          </SubTree>
          <SubTree>
            <h3>Project 5</h3>
            <>
              <Leaf>project-5A.docx</Leaf>
              <Leaf>project-5B.docx</Leaf>
              <Leaf>project-5C.docx</Leaf>
              <Leaf>project-5D.docx</Leaf>
              <Leaf>project-5E.docx</Leaf>
              <Leaf>project-5F.docx</Leaf>
            </>
          </SubTree>
        </>
      </SubTree>
      <SubTree>
        <h3>Reports</h3>
        <>
          <SubTree>
            <h3>report-1</h3>
            <>
              <Leaf>project-1A.docx</Leaf>
              <Leaf>project-1B.docx</Leaf>
              <Leaf>project-1C.docx</Leaf>
            </>
          </SubTree>
          <SubTree>
            <h3>report-2</h3>
            <>
              <Leaf>project-2A.docx</Leaf>
              <Leaf>project-2B.docx</Leaf>
              <Leaf>project-2C.docx</Leaf>
              <Leaf>project-2D.docx</Leaf>
            </>
          </SubTree>
          <SubTree>
            <h3>report-3</h3>
            <>
              <Leaf>project-3A.docx</Leaf>
              <Leaf>project-3B.docx</Leaf>
              <Leaf>project-3C.docx</Leaf>
              <Leaf>project-3D.docx</Leaf>
            </>
          </SubTree>
        </>
      </SubTree>
    </>
  </Tree>
)

export const sample = Template.bind({})
sample.args = {
  ...defaultProps,
}
