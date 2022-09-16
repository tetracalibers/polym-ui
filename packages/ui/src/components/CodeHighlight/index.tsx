import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { GlobalTheme } from './styled/global'
import 'prismjs/components/prism-typescript'

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
  }, [children, lang])

  const Wrap = isInline ? Fragment : 'pre'

  return (
    <>
      <GlobalTheme />
      <Wrap>
        <code className={'language-' + lang}>{children}</code>
      </Wrap>
    </>
  )
}
