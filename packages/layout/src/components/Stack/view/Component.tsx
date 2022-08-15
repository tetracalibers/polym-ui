import { FC } from 'react'
import { default_StackProps, StackProps } from './props'
import { Root } from './styled'

export const Stack: FC<StackProps> = (
  props: StackProps = default_StackProps
) => {
  const { children, space, recursive, separateFrom } = props
  return (
    <Root space={space} recursive={recursive} separateFrom={separateFrom}>
      {children}
    </Root>
  )
}
