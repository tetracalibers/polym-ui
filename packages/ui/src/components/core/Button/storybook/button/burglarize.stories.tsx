import { ComponentStory } from '@storybook/react'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultBurglarizeStyleProps } from '../../model/style'
import { burglarizeStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

export default {
  title: 'button/Burglarize',
  component: Button.Burglarize,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    ...buttonArgTypes,
    ...burglarizeStyleArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.Burglarize {...args}>{children}</Button.Burglarize>
)

export const Burglarize = Template.bind({})
Burglarize.args = {
  ...defaultButtonCharacterProps,
  ...defaultBurglarizeStyleProps,
  children: 'Press!!',
}
