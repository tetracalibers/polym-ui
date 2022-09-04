import { ReactElement, ReactNode } from 'react'
import { Grid } from '../../../layout-algorithm/Grid'
import { VerticalStack } from '../../../layout-algorithm/VerticalStack'

type SingleViewProps = {
  children: ReactNode
}

export const SingleView = ({ children }: SingleViewProps) => {
  return <>{children}</>
}
