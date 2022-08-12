import { StackProps } from './props'
import styled from 'styled-components'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & StackProps

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Stack: FC<Props> = (_props: Props) => {
  return <Root></Root>
}
