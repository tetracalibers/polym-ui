import { ComponentStory } from '@storybook/react'
import { withHoverFadeWave } from '../../../../hoc/hover/fadeWave'
import { Text } from '../../../../Text'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultFadeWaveStyleProps } from '../../model/style'
import { fadeWaveStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'
import { withGradient } from '../../../../hoc/gradient'

export default {
  title: 'button/FadeWave',
  component: Button.FadeWave,
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
    ...fadeWaveStyleArgTypes,
  },
}

const MyButton = withHoverFadeWave(withGradient(Button.StyleBase))

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return (
    <MyButton {...args}>
      <Text color={'#4d608b'}>{children}</Text>
    </MyButton>
  )
}

export const fadeWave = Template.bind({})
fadeWave.args = {
  ...defaultButtonCharacterProps,
  ...defaultFadeWaveStyleProps,
  children: 'Touch Me',
}
