import { ComponentStory } from '@storybook/react'
import { SummaryCard } from '..'
// @ts-ignore
import algorithmDataStructuresLogo from '../../../../../assets/LaTeXbooks/algorithm-datastructureLogo.jpg'
import { ShineImage } from '../../../../image-effect/animation/ShineImage'

export default {
  title: 'OOUI/SummaryCard',
  component: SummaryCard,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {},
}

/* -------------------------------------------- */

const TextTemplate: ComponentStory<typeof SummaryCard> = () => (
  <SummaryCard logo={<ShineImage src={algorithmDataStructuresLogo} />}>
    Algorithms &amp; Data Structures
  </SummaryCard>
)

export const playground = TextTemplate.bind({})
playground.args = {}
