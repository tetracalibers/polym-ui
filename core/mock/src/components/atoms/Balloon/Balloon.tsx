import { FC, ReactNode, HTMLAttributes } from 'react'
import { StylePatch } from '@react-polyhex-ui/styling-patch'

type SpanProps = HTMLAttributes<HTMLSpanElement>

type Props = {
  children: ReactNode
} & SpanProps

const Balloon: FC<Props> = ({ children = '', ...spanProps }) => {
  return (
    <StylePatch>
      <span {...spanProps}>{children}</span>
    </StylePatch>
  )
}

export default Balloon
