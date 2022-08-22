import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const StyledBox = styled.div`
  width: 200px;
  height: 200px;
  margin: 5rem auto;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

type Props = {
  children: ReactNode
}

export const TestBox: FC<Props> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>
}
