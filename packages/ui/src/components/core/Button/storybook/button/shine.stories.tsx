import { ComponentStory } from '@storybook/react'
import { Text } from '../../../../Text'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultShineStyleProps } from '../../model/style'
import { shineStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

export default {
  title: 'button/Shine',
  component: Button.Shine,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    ...buttonArgTypes,
    ...shineStyleArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.Shine {...args}>
    <Text color={'#fff'}>{children}</Text>
  </Button.Shine>
)

export const Shine = Template.bind({})
Shine.args = {
  ...defaultButtonCharacterProps,
  ...defaultShineStyleProps,
  children: 'Touch Me',
}
