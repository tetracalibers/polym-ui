import { useEffect } from 'react'
import Prism from 'prismjs'
import { GlobalTheme } from './styled/global'

type CodeHighlightProps = {
  lang: string
  children: string
}

export const CodeHighlight = ({ lang, children }: CodeHighlightProps) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <GlobalTheme />
      <pre>
        <code className={'language-' + lang}>{children}</code>
      </pre>
    </>
  )
}
