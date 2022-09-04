import { ReactElement, ReactNode } from 'react'
import { Grid } from '../../../layout-algorithm/Grid'
import { SummaryCardGrid } from './styled'

type CollectionViewProps = {
  children: ReactNode
}

export const CollectionView = ({ children }: CollectionViewProps) => {
  return <SummaryCardGrid>{children}</SummaryCardGrid>
}
