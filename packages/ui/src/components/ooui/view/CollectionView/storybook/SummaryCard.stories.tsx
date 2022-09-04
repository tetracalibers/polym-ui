import { ComponentStory } from '@storybook/react'
import { CollectionView } from '..'
// @ts-ignore
import algorithmDataStructuresLogo from '../../../../../assets/LaTeXbooks/algorithm-datastructureLogo.jpg'
import { ShineImage } from '../../../../image-effect/animation/ShineImage'
import { SummaryCard } from '../../SummaryCard'
// @ts-ignore
import englishLogo from '../../../../../assets/LaTeXbooks/english-idiomLogo.jpg'
// @ts-ignore
import sqlLogo from '../../../../../assets/LaTeXbooks/sqlLogo.jpg'
// @ts-ignore
import securityLogo from '../../../../../assets/LaTeXbooks/securityLogo.jpg'
// @ts-ignore
import networkLogo from '../../../../../assets/LaTeXbooks/networkLogo.jpg'
// @ts-ignore
import apLogo from '../../../../../assets/LaTeXbooks/apLogo.jpg'
// @ts-ignore
import combinatoricsLogo from '../../../../../assets/LaTeXbooks/combinatoricsLogo.jpg'
// @ts-ignore
import integersLogo from '../../../../../assets/LaTeXbooks/integersLogo.jpg'
// @ts-ignore
import linearalgebraLogo from '../../../../../assets/LaTeXbooks/linearalgebraLogo.jpg'
// @ts-ignore
import mechanicsLogo from '../../../../../assets/LaTeXbooks/mechanicsLogo.jpg'
// @ts-ignore
import thermodynamicsBasicLogo from '../../../../../assets/LaTeXbooks/thermodynamics-basicLogo.jpg'
// @ts-ignore
import thermodynamicsUniversityLogo from '../../../../../assets/LaTeXbooks/thermodynamics-universityLogo.jpg'
// @ts-ignore
import iupacIntroLogo from '../../../../../assets/LaTeXbooks/iupac-introLogo.jpg'
// @ts-ignore
import iupacAlkaneLogo from '../../../../../assets/LaTeXbooks/iupac-alkaneLogo.jpg'
// @ts-ignore
import iupacCycloalkaneLogo from '../../../../../assets/LaTeXbooks/iupac-cycloalkaneLogo.jpg'
// @ts-ignore
import iupacHalogenLogo from '../../../../../assets/LaTeXbooks/iupac-halogenLogo.jpg'
// @ts-ignore
import iupacOxygenSulfurMonobounditionLogo from '../../../../../assets/LaTeXbooks/iupac-oxygenSulfurMonobounditionLogo.jpg'
// @ts-ignore
import iupacNomenclatureLogo from '../../../../../assets/LaTeXbooks/iupac-nomenclatureLogo.jpg'
// @ts-ignore
import iupacHeterocyclicRingLogo from '../../../../../assets/LaTeXbooks/iupac-heterocyclicRingLogo.jpg'
// @ts-ignore
import iupacCondensedRingLogo from '../../../../../assets/LaTeXbooks/iupac-condensedRingLogo.jpg'
// @ts-ignore
import iupacComplexCondensedRingLogo from '../../../../../assets/LaTeXbooks/iupac-complexCondensedRingLogo.jpg'
import { ScaleImage } from '../../../../image-effect/effect/ScaleImage'

export default {
  title: 'OOUI/CollectionView',
  component: CollectionView,
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

const data = [
  {
    summary: {
      ja: '英単語・構文',
      en: 'English Vocabulary & Syntax',
    },
    logoSrc: englishLogo,
  },
  {
    summary: {
      ja: 'SQL',
      en: 'SQL',
    },
    logoSrc: sqlLogo,
  },
  {
    summary: {
      ja: 'アルゴリズムとデータ構造',
      en: 'Algorithms and Data Structures',
    },
    logoSrc: algorithmDataStructuresLogo,
  },
  {
    summary: {
      ja: 'セキュリティ',
      en: 'security',
    },
    logoSrc: securityLogo,
  },
  {
    summary: {
      ja: 'ネットワーク',
      en: 'network',
    },
    logoSrc: networkLogo,
  },
  {
    summary: {
      ja: '応用情報技術者',
      en: 'Applied Information Technician',
    },
    logoSrc: apLogo,
  },
  {
    summary: {
      ja: '場合の数',
      en: 'number of cases',
    },
    logoSrc: combinatoricsLogo,
  },
  {
    summary: {
      ja: '整数論',
      en: 'number theory',
    },
    logoSrc: integersLogo,
  },
  {
    summary: {
      ja: '線形代数',
      en: 'linear algebra',
    },
    logoSrc: linearalgebraLogo,
  },
  {
    summary: {
      ja: '力学',
      en: 'dynamics',
    },
    logoSrc: mechanicsLogo,
  },
  {
    summary: {
      ja: '熱力学基礎',
      en: 'Fundamentals of Thermodynamics',
    },
    logoSrc: thermodynamicsBasicLogo,
  },
  {
    summary: {
      ja: '大学熱力学',
      en: 'University Thermodynamics',
    },
    logoSrc: thermodynamicsUniversityLogo,
  },
  {
    summary: {
      ja: '命名法を学ぶ前に',
      en: 'Before learning nomenclature',
    },
    logoSrc: iupacIntroLogo,
  },
  {
    summary: {
      ja: '炭化水素の命名法',
      en: 'Nomenclature of hydrocarbons',
    },
    logoSrc: iupacAlkaneLogo,
  },
  {
    summary: {
      ja: '環式炭化水素の命名法',
      en: 'Nomenclature of cyclic hydrocarbons',
    },
    logoSrc: iupacCycloalkaneLogo,
  },
  {
    summary: {
      ja: 'ハロゲン化合物の命名法',
      en: 'Nomenclature of halogenated compounds',
    },
    logoSrc: iupacHalogenLogo,
  },
  {
    summary: {
      ja: 'アルコール・チオール類の命名法',
      en: 'Nomenclature of Alcohols and Thiols',
    },
    logoSrc: iupacOxygenSulfurMonobounditionLogo,
  },
  {
    summary: {
      ja: 'カルボン酸の命名法',
      en: 'Nomenclature of carboxylic acids',
    },
    logoSrc: iupacNomenclatureLogo,
  },
  {
    summary: {
      ja: '単環式複素環化合物の命名法',
      en: 'Nomenclature of monocyclic heterocyclic compounds',
    },
    logoSrc: iupacHeterocyclicRingLogo,
  },
  {
    summary: {
      ja: '縮合環炭化水素の命名法',
      en: 'Nomenclature of fused ring hydrocarbons',
    },
    logoSrc: iupacCondensedRingLogo,
  },
  {
    summary: {
      ja: '複素縮合環化合物の命名法',
      en: 'Nomenclature of heterocyclic compounds',
    },
    logoSrc: iupacComplexCondensedRingLogo,
  },
]

const TextTemplate: ComponentStory<typeof CollectionView> = () => (
  <CollectionView>
    {data.map(({ summary, logoSrc }) => (
      <SummaryCard logo={<ScaleImage src={logoSrc} />}>
        {summary.en}
      </SummaryCard>
    ))}
  </CollectionView>
)

export const playground = TextTemplate.bind({})
playground.args = {}
