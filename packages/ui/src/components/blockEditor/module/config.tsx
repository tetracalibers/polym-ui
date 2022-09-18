import { ReactElement, ReactNode } from 'react'
import { FiLink } from 'react-icons/fi'
import {
  IoImageOutline,
  IoInformationCircleSharp,
  IoAlertCircleOutline,
} from 'react-icons/io5'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import {
  RiCodeSSlashFill,
  RiMarkPenFill,
  RiListCheck,
  RiListOrdered,
} from 'react-icons/ri'
import { SiAutohotkey } from 'react-icons/si'
import { BiParagraph } from 'react-icons/bi'
//import { VscRepo } from 'react-icons/vsc'
import { TbSeparatorHorizontal, TbHeading, TbMath } from 'react-icons/tb'
//import { CgListTree } from 'react-icons/cg'
import { ImTerminal, ImCommand } from 'react-icons/im'
import { FormatArgs } from './FormatArgs'
import { ValueOf } from './ValueOf'
import { CodeHighlight } from '../../CodeHighlight'
import { MathFormula } from '../previews/MathFormula'
import { ParagraphPreview } from '../previews/Paragraph'
import { KeyBoardPreview } from '../previews/Keyboard'
import { Heading } from '../../core/Heading'
import { Blockquote } from '../previews/Blockquote'
import { ToggleContent } from '../previews/Toggle'
import { GrBlockQuote } from 'react-icons/gr'
import { LinkPreview } from '../previews/Link'

const blockType = [
  'link', // block | inline
  'image', // block
  'code', // block | inline
  'keyboard', // inline
  'marker', // inline
  'toggle', // block
  'info', // block
  'alert', // block
  'paragraph', // block | inline
  'ulist', // block
  'olist', // block
  //'wordCard', // block
  'separator', // block
  'heading', // block
  'command', // inline
  'terminal', // block
  //'dirtree', // block
  'blockquote', // block | inline
  'formula', // block | inline
] as const
export type BlockType = typeof blockType[number]

export type BoxType = 'inline' | 'block' | 'both'

export type Block<T extends BlockType> = {
  type: T
  icon: ReactElement
  boxType: BoxType
  format: (args: FormatArgs[T]) => ReactNode
}

type Blocks = ValueOf<{
  [t in BlockType]: Block<t>
}>[]

export const blockConf: Blocks = [
  {
    type: 'link',
    icon: <FiLink />,
    boxType: 'both',
    format: ({ url = '', label = '', boxType = 'inline' }) => {
      const isInline = boxType === 'inline'
      return (
        <LinkPreview url={url} isInline={isInline}>
          {label}
        </LinkPreview>
      )
    },
  },
  {
    type: 'image',
    icon: <IoImageOutline />,
    boxType: 'block',
    format: ({ url }) => <img src={url} />,
  },
  {
    type: 'code',
    icon: <RiCodeSSlashFill />,
    boxType: 'both',
    format: ({ input, boxType = 'inline', lang = 'js' }) => {
      const isInline = boxType === 'inline'
      return (
        <CodeHighlight lang={lang} isInline={isInline}>
          {input}
        </CodeHighlight>
      )
    },
  },
  {
    type: 'keyboard',
    icon: <SiAutohotkey />,
    boxType: 'inline',
    format: ({ items = [] }) => <KeyBoardPreview keyNames={items} />,
  },
  {
    type: 'marker',
    icon: <RiMarkPenFill />,
    boxType: 'inline',
    format: ({ input }) => <mark>{input}</mark>,
  },
  {
    type: 'toggle',
    boxType: 'block',
    icon: <IoIosArrowDropdownCircle />,
    format: ({ input, summary }) => (
      <ToggleContent summary={summary}>{input}</ToggleContent>
    ),
  },
  {
    type: 'info',
    icon: <IoInformationCircleSharp />,
    boxType: 'block',
    format: ({ input }) => <div>{input}</div>,
  },
  {
    type: 'alert',
    icon: <IoAlertCircleOutline />,
    boxType: 'block',
    format: ({ input }) => <div>{input}</div>,
  },
  {
    type: 'paragraph',
    icon: <BiParagraph />,
    boxType: 'both',
    format: ({ input, boxType = 'inline' }) => {
      const isInline = boxType === 'inline'
      return <ParagraphPreview isInline={isInline}>{input}</ParagraphPreview>
    },
  },
  {
    type: 'ulist',
    icon: <RiListCheck />,
    boxType: 'block',
    format: ({ items = [] }) => (
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    type: 'olist',
    icon: <RiListOrdered />,
    boxType: 'block',
    format: ({ items = [], order = 1 }) => (
      <ol start={order}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    ),
  },
  //{
  //  type: 'wordCard',
  //  icon: <VscRepo />,
  //  format: input => <dl>{input}</dl>,
  //},
  {
    type: 'separator',
    icon: <TbSeparatorHorizontal />,
    boxType: 'block',
    format: () => <hr />,
  },
  {
    type: 'heading',
    icon: <TbHeading />,
    boxType: 'block',
    format: ({ input, level = 2 }) => <Heading level={level}>{input}</Heading>,
  },
  {
    type: 'command',
    icon: <ImCommand />,
    boxType: 'inline',
    format: ({ input }) => <kbd>{input}</kbd>,
  },
  //{
  //  type: 'dirtree',
  //  icon: <CgListTree />,
  //  format: input => <div>{input}</div>,
  //},
  {
    type: 'blockquote',
    icon: <GrBlockQuote />,
    boxType: 'both',
    format: ({ input, cite, boxType = 'inline' }) => {
      const isInline = boxType === 'inline'
      return (
        <Blockquote isInline={isInline} cite={cite}>
          {input}
        </Blockquote>
      )
    },
  },
  {
    type: 'terminal',
    icon: <ImTerminal />,
    boxType: 'block',
    format: ({ input }) => <samp>{input}</samp>,
  },
  {
    type: 'formula',
    icon: <TbMath />,
    boxType: 'both',
    format: ({ input, boxType = 'inline' }) => {
      const isInline = boxType === 'inline'
      return <MathFormula isInline={isInline} texSrc={input} />
    },
  },
]
