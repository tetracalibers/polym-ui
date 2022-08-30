import { ComponentStory } from '@storybook/react'
import { Image } from '..'
import { commmonArgTypes } from '../../model/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../assets/myproduct.jpg'

export default {
  title: 'image/Image',
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
    ...commmonArgTypes,
    ...styleArgTypes,
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
