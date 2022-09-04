import { ComponentStory } from '@storybook/react'
import { CollectionView } from '..'
import { SummaryCard } from '../../SummaryCard'
import { ScaleImage } from '../../../../image-effect/effect/ScaleImage'
import { data } from '../../../../../data/latexnote'

export default {
  title: 'OOUI/CollectionView',
  component: CollectionView,
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

const TextTemplate: ComponentStory<typeof CollectionView> = () => (
  <CollectionView>
    {data.map(({ summary, logoSrc }, idx) => (
      <SummaryCard logo={<ScaleImage src={logoSrc} />} key={idx}>
        {summary.en}
      </SummaryCard>
    ))}
  </CollectionView>
)

export const playground = TextTemplate.bind({})
playground.args = {}
