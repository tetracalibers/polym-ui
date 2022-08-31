import { ComponentStory } from '@storybook/react'
import { BurgerToggle } from '..'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'symbols/BurgerToggle',
  component: BurgerToggle,
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

const Template: ComponentStory<typeof BurgerToggle> = ({ ...args }) => (
  <BurgerToggle {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
