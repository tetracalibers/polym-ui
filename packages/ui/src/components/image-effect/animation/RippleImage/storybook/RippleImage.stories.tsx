import { ComponentStory } from '@storybook/react'
import { RippleImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../assets/sakura.jpg'
import { effectArgTypes } from '../../model/argTypes'

export default {
  title: 'image effect/RippleImage',
  component: RippleImage,
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

const Template: ComponentStory<typeof RippleImage> = ({ src, ...args }) => (
  <RippleImage {...args} src={sample01} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
