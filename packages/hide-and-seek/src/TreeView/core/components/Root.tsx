import { forwardRef, ForwardRefRenderFunction, OlHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface RootProps extends OlHTMLAttributes<HTMLUListElement> {}

const Root = styled.ul`
  list-style-type: none;
  padding: 0;
`

const IRootNode: ForwardRefRenderFunction<HTMLUListElement, RootProps> = (
  { children, ...rest },
  ref
) => {
  return (
    <Root ref={ref} role='tree' {...rest}>
      {children}
    </Root>
  )
}

export const RootNode = forwardRef(IRootNode)
