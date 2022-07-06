import { FC, ReactNode, HTMLAttributes } from 'react'

type SpanProps = HTMLAttributes<HTMLSpanElement>

type Props = {
  children: ReactNode
} & SpanProps

const Balloon: FC<Props> = ({ children = '', ...spanProps }) => {
  return <span {...spanProps}>{children}</span>
}

export default Balloon
