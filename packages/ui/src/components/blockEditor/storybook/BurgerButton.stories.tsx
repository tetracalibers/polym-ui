import { ComponentStory } from '@storybook/react'
import { BurgerButton } from '../button/BurgerButton'

export default {
  title: 'editor/BurgerButton',
  component: BurgerButton,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "strong" tag in HTML',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof BurgerButton> = () => <BurgerButton />

export const floatLabelInput = Template.bind({})
floatLabelInput.args = {}
