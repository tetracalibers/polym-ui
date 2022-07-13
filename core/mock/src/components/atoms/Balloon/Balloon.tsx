import { FC, ReactNode, HTMLAttributes } from 'react'
import { StylePatch, StylePatchProvider } from '@react-polyhex-ui/styling-patch'

type SpanProps = HTMLAttributes<HTMLSpanElement>

type Props = {
  children: ReactNode
} & SpanProps

const Balloon: FC<Props> = ({ children = '', ...spanProps }) => {
  return (
    <StylePatchProvider>
      <StylePatch>
        <span {...spanProps}>{children}</span>
      </StylePatch>
    </StylePatchProvider>
  )
}

export default Balloon
