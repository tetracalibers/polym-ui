import { ComponentStory } from '@storybook/react'
import { defaultModalProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Modal } from '..'
import { coreArgTypes } from '../model/argTypes'
import LoremIpsum from 'react-lorem-ipsum'
import { Container, NeedScrollPage } from '../../../mock/TestBox'
import { BackCover } from '../styled'

export default {
  title: 'dialog/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Component that wraps the "button" tag in HTML',
      },
    },
  },
  argTypes: {
    ...coreArgTypes,
  },
}

const Template: ComponentStory<typeof Modal> = ({ ...args }) => (
  <NeedScrollPage>
    <Modal {...args}>
      <LoremIpsum />
    </Modal>
    <LoremIpsum p={10} />
  </NeedScrollPage>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultModalProps,
}
