import { ComponentStory } from '@storybook/react'
import { ArrowIcon } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'symbols/ArrowIcon',
  component: ArrowIcon,
  parameters: {
    docs: {
      page: () => <DocsPage />,
    },
  },
  argTypes: {
    ...logicArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof ArrowIcon> = ({ ...args }) => (
  <ArrowIcon {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
