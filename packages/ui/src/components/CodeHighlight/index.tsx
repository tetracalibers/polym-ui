import { ReactNode, useEffect } from 'react'
import Prism from 'prismjs'
import { GlobalTheme } from './styled/global'
import 'prismjs/components/prism-typescript'

type BoxTypeSwitchProps = {
  isInline: boolean
  children: ReactNode
}

const BoxTypeSwitch = ({ isInline, children }: BoxTypeSwitchProps) => {
  return isInline ? <>{children}</> : <pre>{children}</pre>
}

type CodeHighlightProps = {
  lang: string
  children: string
  isInline?: boolean
}

export const CodeHighlight = ({
  lang,
  children,
  isInline = false,
}: CodeHighlightProps) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [children, lang, isInline])

  return (
    <>
      <GlobalTheme />
      <BoxTypeSwitch isInline={isInline}>
        <code className={'language-' + lang}>{children}</code>
      </BoxTypeSwitch>
    </>
  )
}
