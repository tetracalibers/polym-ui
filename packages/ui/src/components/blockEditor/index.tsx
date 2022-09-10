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
import { VscRepo } from 'react-icons/vsc'
import { TbSeparatorHorizontal, TbHeading, TbMath } from 'react-icons/tb'
import { CgListTree } from 'react-icons/cg'
import { BsBlockquoteLeft } from 'react-icons/bs'
import { ImTerminal, ImCommand } from 'react-icons/im'
import { IconOnly } from '../core/IconOnly'

const blockType = [
  'link',
  'image',
  'code',
  'keyboard',
  'marker',
  'toggle',
  'info',
  'alert',
  'paragraph',
  'ulist',
  'olist',
  'word-card',
  'separator',
  'heading',
  'command',
  'terminal',
  'dirtree',
  'blockquote',
  'formula',
] as const
type BlockType = typeof blockType[number]

type Block = {
  type: BlockType
  icon: ReactElement
  select?: string[]
  format: (input: string, type?: 'inline' | 'block') => ReactNode
}

const blocks: Block[] = [
  {
    type: 'link',
    icon: <FiLink />,
    format: input => <a>{input}</a>,
  },
  {
    type: 'image',
    icon: <IoImageOutline />,
    format: input => <img src={input} />,
  },
  {
    type: 'code',
    icon: <RiCodeSSlashFill />,
    select: ['inline', 'block'],
    format: (input, type) =>
      type === 'inline' ? (
        <code>{input}</code>
      ) : (
        <pre>
          <code>{input}</code>
        </pre>
      ),
  },
  {
    type: 'keyboard',
    icon: <SiAutohotkey />,
    format: input => <kbd>{input}</kbd>,
  },
  {
    type: 'marker',
    icon: <RiMarkPenFill />,
    format: input => <mark>{input}</mark>,
  },
  {
    type: 'toggle',
    icon: <IoIosArrowDropdownCircle />,
    format: input => <div>{input}</div>,
  },
  {
    type: 'info',
    icon: <IoInformationCircleSharp />,
    format: input => <div>{input}</div>,
  },
  {
    type: 'alert',
    icon: <IoAlertCircleOutline />,
    format: input => <div>{input}</div>,
  },
  {
    type: 'paragraph',
    icon: <BiParagraph />,
    format: input => <p>{input}</p>,
  },
  {
    type: 'ulist',
    icon: <RiListCheck />,
    format: input => <ul>{input}</ul>,
  },
  {
    type: 'olist',
    icon: <RiListOrdered />,
    format: input => <ol>{input}</ol>,
  },
  {
    type: 'word-card',
    icon: <VscRepo />,
    format: input => <dl>{input}</dl>,
  },
  {
    type: 'separator',
    icon: <TbSeparatorHorizontal />,
    format: _input => <hr />,
  },
  {
    type: 'heading',
    icon: <TbHeading />,
    format: input => <h2>{input}</h2>,
  },
  {
    type: 'command',
    icon: <ImCommand />,
    format: input => <kbd>{input}</kbd>,
  },
  {
    type: 'dirtree',
    icon: <CgListTree />,
    format: input => <div>{input}</div>,
  },
  {
    type: 'blockquote',
    icon: <BsBlockquoteLeft />,
    select: ['inline', 'block'],
    format: (input, type) =>
      type === 'inline' ? <q>{input}</q> : <blockquote>{input}</blockquote>,
  },
  {
    type: 'terminal',
    icon: <ImTerminal />,
    format: input => <samp>{input}</samp>,
  },
  {
    type: 'formula',
    icon: <TbMath />,
    select: ['inline', 'block'],
    format: (input, type) =>
      type === 'inline' ? <span>{input}</span> : <div>{input}</div>,
  },
]

export const BlockEditor = () => {
  return (
    <>
      {blocks.map(blockConf => {
        return <IconOnly.Button label={blockConf.type} icon={blockConf.icon} />
      })}
    </>
  )
}
