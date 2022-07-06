import { FC, ReactNode, Fragment } from 'react'

type Props = {
  children: ReactNode
}

export const StylePatch: FC<Props> = ({ children }) => (
  <Fragment>{children}</Fragment>
)
