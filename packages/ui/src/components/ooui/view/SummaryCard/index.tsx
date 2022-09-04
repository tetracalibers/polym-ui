import { ReactElement, ReactNode } from 'react'
import { Flex, Summary } from './styled'

type SummaryCardProps = {
  logo: ReactElement
  children: ReactNode
}

export const SummaryCard = ({ children, logo }: SummaryCardProps) => {
  return (
    <Flex>
      {logo}
      <Summary>{children}</Summary>
    </Flex>
  )
}
