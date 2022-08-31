import { ComponentStory } from '@storybook/react'
import { Image } from '..'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../assets/myproduct.jpg'

export default {
  title: 'core/Image',
  component: Image,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
  },
}

const Template: ComponentStory<typeof Image> = ({ ...args }) => (
  <Image {...args} src={sample01} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
