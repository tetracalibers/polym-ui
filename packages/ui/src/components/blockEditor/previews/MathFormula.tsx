// @ts-ignore
import MathStyle from 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import { createGlobalStyle } from 'styled-components'

export type MathFormulaProps = {
  texSrc: string
  isInline?: boolean
}

const GlobalStyle = createGlobalStyle`
  ${MathStyle}
  .katex * {
    font-family: 'KaTeX_Main','Times New Roman' !important;
  }
`

export const MathFormula = ({ texSrc, isInline = false }: MathFormulaProps) => {
  const Tag = isInline ? InlineMath : BlockMath

  return (
    <>
      <GlobalStyle />
      <Tag math={texSrc} />
    </>
  )
}
