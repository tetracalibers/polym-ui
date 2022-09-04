// @ts-ignore
import algorithmDataStructuresLogo from '../../../assets/LaTeXbooks/algorithm-datastructureLogo.jpg'
// @ts-ignore
import englishLogo from '../../../assets/LaTeXbooks/english-idiomLogo.jpg'
// @ts-ignore
import sqlLogo from '../../../assets/LaTeXbooks/sqlLogo.jpg'
// @ts-ignore
import securityLogo from '../../../assets/LaTeXbooks/securityLogo.jpg'
// @ts-ignore
import networkLogo from '../../../assets/LaTeXbooks/networkLogo.jpg'
// @ts-ignore
import apLogo from '../../../assets/LaTeXbooks/apLogo.jpg'
// @ts-ignore
import combinatoricsLogo from '../../../assets/LaTeXbooks/combinatoricsLogo.jpg'
// @ts-ignore
import integersLogo from '../../../assets/LaTeXbooks/integersLogo.jpg'
// @ts-ignore
import linearalgebraLogo from '../../../assets/LaTeXbooks/linearalgebraLogo.jpg'
// @ts-ignore
import mechanicsLogo from '../../../assets/LaTeXbooks/mechanicsLogo.jpg'
// @ts-ignore
import thermodynamicsBasicLogo from '../../../assets/LaTeXbooks/thermodynamics-basicLogo.jpg'
// @ts-ignore
import thermodynamicsUniversityLogo from '../../../assets/LaTeXbooks/thermodynamics-universityLogo.jpg'
// @ts-ignore
import iupacIntroLogo from '../../../assets/LaTeXbooks/iupac-introLogo.jpg'
// @ts-ignore
import iupacAlkaneLogo from '../../../assets/LaTeXbooks/iupac-alkaneLogo.jpg'
// @ts-ignore
import iupacCycloalkaneLogo from '../../../assets/LaTeXbooks/iupac-cycloalkaneLogo.jpg'
// @ts-ignore
import iupacHalogenLogo from '../../../assets/LaTeXbooks/iupac-halogenLogo.jpg'
// @ts-ignore
import iupacOxygenSulfurMonobounditionLogo from '../../../assets/LaTeXbooks/iupac-oxygenSulfurMonobounditionLogo.jpg'
// @ts-ignore
import iupacNomenclatureLogo from '../../../assets/LaTeXbooks/iupac-nomenclatureLogo.jpg'
// @ts-ignore
import iupacHeterocyclicRingLogo from '../../../assets/LaTeXbooks/iupac-heterocyclicRingLogo.jpg'
// @ts-ignore
import iupacCondensedRingLogo from '../../../assets/LaTeXbooks/iupac-condensedRingLogo.jpg'
// @ts-ignore
import iupacComplexCondensedRingLogo from '../../../assets/LaTeXbooks/iupac-complexCondensedRingLogo.jpg'

const tags = {
  HIGH_SCHOOL: {
    ja: '高校生向け',
    en: 'For High School Students',
  },
  UNIVERSITY: {
    ja: '大学生向け',
    en: 'For University Students',
  },
  IT: {
    ja: 'IT',
    en: 'IT',
  },
  ENGLISH: {
    ja: '英語',
    en: 'English',
  },
  MATH: {
    ja: '数学',
    en: 'Mathematics',
  },
  PHYSICS: {
    ja: '物理',
    en: 'Physics',
  },
  CHEMISTRY: {
    ja: '化学',
    en: 'Chemistry',
  },
  ORGANIC_CHEMISTRY: {
    ja: '有機化学',
    en: 'Organic Chemistry',
  },
} as const

type Tags = keyof typeof tags

type Data = {
  summary: {
    ja: string
    en: string
  }
  tags: Tags[]
  logoSrc: string
}[]

export const data: Data = [
  {
    summary: {
      ja: '英単語・構文',
      en: 'English Vocabulary & Syntax',
    },
    tags: ['MATH', 'HIGH_SCHOOL'],
    logoSrc: englishLogo,
  },
  {
    summary: {
      ja: 'SQL',
      en: 'SQL',
    },
    tags: ['IT'],
    logoSrc: sqlLogo,
  },
  {
    summary: {
      ja: 'アルゴリズムとデータ構造',
      en: 'Algorithms and Data Structures',
    },
    tags: ['IT'],
    logoSrc: algorithmDataStructuresLogo,
  },
  {
    summary: {
      ja: 'セキュリティ',
      en: 'security',
    },
    tags: ['IT'],
    logoSrc: securityLogo,
  },
  {
    summary: {
      ja: 'ネットワーク',
      en: 'network',
    },
    tags: ['IT'],
    logoSrc: networkLogo,
  },
  {
    summary: {
      ja: '応用情報技術者',
      en: 'Applied Information Technician',
    },
    tags: ['IT'],
    logoSrc: apLogo,
  },
  {
    summary: {
      ja: '場合の数',
      en: 'number of cases',
    },
    tags: ['MATH', 'HIGH_SCHOOL'],
    logoSrc: combinatoricsLogo,
  },
  {
    summary: {
      ja: '整数論',
      en: 'number theory',
    },
    tags: ['MATH', 'HIGH_SCHOOL'],
    logoSrc: integersLogo,
  },
  {
    summary: {
      ja: '線形代数',
      en: 'linear algebra',
    },
    tags: ['MATH', 'UNIVERSITY'],
    logoSrc: linearalgebraLogo,
  },
  {
    summary: {
      ja: '力学',
      en: 'dynamics',
    },
    tags: ['PHYSICS', 'HIGH_SCHOOL', 'UNIVERSITY'],
    logoSrc: mechanicsLogo,
  },
  {
    summary: {
      ja: '熱力学基礎',
      en: 'Fundamentals of Thermodynamics',
    },
    tags: ['PHYSICS', 'HIGH_SCHOOL'],
    logoSrc: thermodynamicsBasicLogo,
  },
  {
    summary: {
      ja: '大学熱力学',
      en: 'University Thermodynamics',
    },
    tags: ['PHYSICS', 'UNIVERSITY'],
    logoSrc: thermodynamicsUniversityLogo,
  },
  {
    summary: {
      ja: '命名法を学ぶ前に',
      en: 'Before learning nomenclature',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacIntroLogo,
  },
  {
    summary: {
      ja: '炭化水素の命名法',
      en: 'Nomenclature of hydrocarbons',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacAlkaneLogo,
  },
  {
    summary: {
      ja: '環式炭化水素の命名法',
      en: 'Nomenclature of cyclic hydrocarbons',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacCycloalkaneLogo,
  },
  {
    summary: {
      ja: 'ハロゲン化合物の命名法',
      en: 'Nomenclature of halogenated compounds',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacHalogenLogo,
  },
  {
    summary: {
      ja: 'アルコール・チオール類の命名法',
      en: 'Nomenclature of Alcohols and Thiols',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacOxygenSulfurMonobounditionLogo,
  },
  {
    summary: {
      ja: 'カルボン酸の命名法',
      en: 'Nomenclature of carboxylic acids',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacNomenclatureLogo,
  },
  {
    summary: {
      ja: '単環式複素環化合物の命名法',
      en: 'Nomenclature of monocyclic heterocyclic compounds',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacHeterocyclicRingLogo,
  },
  {
    summary: {
      ja: '縮合環炭化水素の命名法',
      en: 'Nomenclature of fused ring hydrocarbons',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacCondensedRingLogo,
  },
  {
    summary: {
      ja: '複素縮合環化合物の命名法',
      en: 'Nomenclature of heterocyclic compounds',
    },
    tags: ['CHEMISTRY', 'ORGANIC_CHEMISTRY', 'UNIVERSITY'],
    logoSrc: iupacComplexCondensedRingLogo,
  },
]
