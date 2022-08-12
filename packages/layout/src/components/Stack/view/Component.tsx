import { FC } from 'react'
import { default_StackProps, StackProps } from './props'
import { Root } from './styled'

export const Stack: FC<StackProps> = (
  props: StackProps = default_StackProps
) => {
  const { children, space, recursive } = props
  return (
    <Root recursive={recursive} space={space}>
      {children}
    </Root>
  )
}
