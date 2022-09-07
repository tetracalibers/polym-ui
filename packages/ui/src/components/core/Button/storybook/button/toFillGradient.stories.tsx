import { ComponentStory } from '@storybook/react'
import { Text } from '../../../../Text'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultToFillGradientStyleProps } from '../../model/style'
import { toFillGradientStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

export default {
  title: 'button/ToFillGradient',
  component: Button.ToFillGradient,
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
    ...toFillGradientStyleArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.ToFillGradient {...args}>
    <Text color={'#FFF'}>{children as string}</Text>
  </Button.ToFillGradient>
)

export const toFillGradient = Template.bind({})
toFillGradient.args = {
  ...defaultButtonCharacterProps,
  ...defaultToFillGradientStyleProps,
  children: 'Touch me',
}
