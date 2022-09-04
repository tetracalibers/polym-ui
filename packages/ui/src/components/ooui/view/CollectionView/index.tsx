import { ReactElement, ReactNode } from 'react'
import { Grid } from '../../../layout-algorithm/Grid'
import { Flex, Logo, Summary } from './styled'

type CollectionViewProps = {
  children: ReactNode
}

export const CollectionView = ({ children }: CollectionViewProps) => {
  return <Grid>{children}</Grid>
}
