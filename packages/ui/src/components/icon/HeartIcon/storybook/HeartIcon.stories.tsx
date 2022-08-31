import { ComponentStory } from '@storybook/react'
import { HeartIcon } from '..'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'symbols/HeartIcon',
  component: HeartIcon,
  parameters: {
    docs: {
      page: () => <DocsPage />,
    },
  },
  argTypes: {
    ...logicArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof HeartIcon> = ({ ...args }) => (
  <HeartIcon {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
