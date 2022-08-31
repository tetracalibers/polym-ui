import { ComponentStory } from '@storybook/react'
import { CircleIcon } from '..'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'symbols/CircleIcon',
  component: CircleIcon,
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
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof CircleIcon> = ({ ...args }) => (
  <CircleIcon {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
