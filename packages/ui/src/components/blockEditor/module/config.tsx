import { Fragment, ReactElement, ReactNode } from 'react'
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
import { BsBlockquoteLeft } from 'react-icons/bs'
import { ImTerminal, ImCommand } from 'react-icons/im'
import { FormatArgs } from './FormatArgs'
import { ValueOf } from './ValueOf'
import { CodeHighlight } from '../../CodeHighlight'

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

export type Block<T extends BlockType> = {
  type: T
  icon: ReactElement
  select?: string[]
  format: (args: FormatArgs[T]) => ReactNode
}

type Blocks = ValueOf<{
  [t in BlockType]: Block<t>
}>[]

export const blockConf: Blocks = [
  {
    type: 'link',
    icon: <FiLink />,
    format: ({ url, label, boxType = 'block' }) => {
      const Wrap = boxType === 'inline' ? Fragment : 'div'
      return (
        <Wrap>
          <a href={url}>{label}</a>
        </Wrap>
      )
    },
  },
  {
    type: 'image',
    icon: <IoImageOutline />,
    format: ({ url }) => <img src={url} />,
  },
  {
    type: 'code',
    icon: <RiCodeSSlashFill />,
    select: ['inline', 'block'],
    format: ({ input, boxType = 'block', lang = 'js' }) => {
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
    format: ({ input }) => <kbd>{input}</kbd>,
  },
  {
    type: 'marker',
    icon: <RiMarkPenFill />,
    format: ({ input }) => <mark>{input}</mark>,
  },
  {
    type: 'toggle',
    icon: <IoIosArrowDropdownCircle />,
    format: ({ input }) => <div>{input}</div>,
  },
  {
    type: 'info',
    icon: <IoInformationCircleSharp />,
    format: ({ input }) => <div>{input}</div>,
  },
  {
    type: 'alert',
    icon: <IoAlertCircleOutline />,
    format: ({ input }) => <div>{input}</div>,
  },
  {
    type: 'paragraph',
    icon: <BiParagraph />,
    format: ({ input }) => <p>{input}</p>,
  },
  {
    type: 'ulist',
    icon: <RiListCheck />,
    format: ({ items }) => (
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
    format: ({ items }) => (
      <ol>
        {items.map(({ item }, idx) => (
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
    format: () => <hr />,
  },
  {
    type: 'heading',
    icon: <TbHeading />,
    format: ({ text }) => <h2>{text}</h2>,
  },
  {
    type: 'command',
    icon: <ImCommand />,
    format: ({ input }) => <kbd>{input}</kbd>,
  },
  //{
  //  type: 'dirtree',
  //  icon: <CgListTree />,
  //  format: input => <div>{input}</div>,
  //},
  {
    type: 'blockquote',
    icon: <BsBlockquoteLeft />,
    select: ['inline', 'block'],
    format: ({ input, boxType }) =>
      boxType === 'inline' ? <q>{input}</q> : <blockquote>{input}</blockquote>,
  },
  {
    type: 'terminal',
    icon: <ImTerminal />,
    format: ({ input }) => <samp>{input}</samp>,
  },
  {
    type: 'formula',
    icon: <TbMath />,
    select: ['inline', 'block'],
    format: ({ input, boxType }) =>
      boxType === 'inline' ? <span>{input}</span> : <div>{input}</div>,
  },
]
