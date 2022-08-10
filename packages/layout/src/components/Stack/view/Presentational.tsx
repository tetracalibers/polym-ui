import { StackProps } from './StackProps'
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

const Stack: FC<Props> = (props: Props) => {
  ;<Root></Root>
}
