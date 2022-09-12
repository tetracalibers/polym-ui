import { ReactNode } from 'react'
import { GrAlert } from 'react-icons/gr'
import { Container } from './styled/Container'
import { WrapIcon } from './styled/WrapIcon'

export type AlertCardProps = {
  children: ReactNode
}

export const AlertCard = ({ children }: AlertCardProps) => {
  return (
    <>
      <Container>
        <WrapIcon aria-hidden='true'>
          <GrAlert />
        </WrapIcon>
        {children}
      </Container>
    </>
  )
}
