import { defaultDesignProps, DesignProps } from './designProps'
import styled from 'styled-components'
import type { FC, ReactNode } from 'react'

type StackProps = {
  children: ReactNode
} & DesignProps

const defaultStackProps = {
  ...defaultDesignProps,
  children: undefined,
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Stack: FC<StackProps> = (
  props: StackProps = defaultStackProps
) => {
  const { children } = props
  return <Root>{children}</Root>
}
