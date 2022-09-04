import { ComponentStory } from '@storybook/react'
import { CircleClip } from '..'
import { Image } from '../../../image-effect/core'
// @ts-ignore
import catImage from '../../../../assets/cat.jpg'

export default {
  title: 'shape clip/CircleClip',
  component: CircleClip,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {},
}

/* -------------------------------------------- */

const TextTemplate: ComponentStory<typeof CircleClip> = () => (
  <CircleClip>
    <Image src={catImage} alt={'my_cat'} />
  </CircleClip>
)

export const playground = TextTemplate.bind({})
playground.args = {}
