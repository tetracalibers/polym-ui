import { ComponentStory } from '@storybook/react'
import { ShineImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../assets/sakura.jpg'
import { effectArgTypes } from '../../model/argTypes'

export default {
  title: 'image effect/ShineImage',
  component: ShineImage,
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
    ...effectArgTypes,
  },
}

const Template: ComponentStory<typeof ShineImage> = ({ src, ...args }) => (
  <ShineImage {...args} src={sample01} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
