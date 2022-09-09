import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'

export interface RootProps extends ComponentPropsWithoutRef<'ul'> {}

const _RootNode: ForwardRefRenderFunction<HTMLUListElement, RootProps> = (
  { children, ...rest },
  ref
) => {
  return (
    <ul role='menubar' aria-label='' ref={ref} {...rest}>
      {children}
    </ul>
  )
}

export const RootNode = forwardRef(_RootNode)
