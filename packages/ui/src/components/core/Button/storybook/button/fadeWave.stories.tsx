import { ComponentStory } from '@storybook/react'
import { Text } from '../../../../Text'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultFadeWaveStyleProps } from '../../model/style'
import { fadeWaveStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

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

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.FadeWave {...args}>
    <Text color={'#4d608b'}>{children}</Text>
  </Button.FadeWave>
)

export const fadeWave = Template.bind({})
fadeWave.args = {
  ...defaultButtonCharacterProps,
  ...defaultFadeWaveStyleProps,
  children: 'Touch Me',
}
