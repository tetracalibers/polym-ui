import { ComponentStory } from '@storybook/react'
import { SingleView } from '..'
import { SummaryCard } from '../../SummaryCard'
import { ScaleImage } from '../../../../image-effect/effect/ScaleImage'
import { data } from '../../../data/latexnote'
import { VerticalStack } from '../../../../layout-algorithm/VerticalStack'
import { Image } from '../../../../image-effect/core'
import { CircleClip } from '../../../../shape-clip/Circle'
import { HorizontalCenter } from '../../../../layout-algorithm/HorizontalCenter'

export default {
  title: 'OOUI/SingleView',
  component: SingleView,
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

const { summary, logoSrc, tags } = data[0]

/* -------------------------------------------- */

const TextTemplate: ComponentStory<typeof SingleView> = () => (
  <SingleView>
    <VerticalStack>
      <CircleClip>
        <Image src={logoSrc} />
      </CircleClip>
      <div>{summary.en}</div>
    </VerticalStack>
  </SingleView>
)

export const playground = TextTemplate.bind({})
playground.args = {}
