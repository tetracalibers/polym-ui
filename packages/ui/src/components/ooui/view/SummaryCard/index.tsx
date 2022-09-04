import { ReactElement, ReactNode } from 'react'
import { Flex, Logo, Summary } from './styled'

type SummaryCardProps = {
  logo: ReactElement
  children: ReactNode
}

export const SummaryCard = ({ children, logo }: SummaryCardProps) => {
  return (
    <Flex>
      <Logo>{logo}</Logo>
      <Summary>{children}</Summary>
    </Flex>
  )
}
