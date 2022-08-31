import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  Ref,
  Fragment,
} from 'react'
import { isStyledComponent, StyledComponent } from 'styled-components'
import { CharacterProps, defaultProps } from './model/props'

type AllowElement = StyledComponent<'header', any> | ReactElement<any, 'header'>

export type HeaderProps<As extends AllowElement> = {
  ref?: Ref<HTMLElement>
  as?: As
} & CharacterProps &
  ComponentPropsWithoutRef<'header'>

const HeaderInner = <As extends AllowElement>(
  { as, children, ..._props }: HeaderProps<As>,
  ref: ForwardedRef<HTMLElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  if (!as) {
    return (
      <header {...props} ref={ref}>
        {children}
      </header>
    )
  }

  const Component = (props: Omit<HeaderProps<As>, 'as'>) =>
    isStyledComponent(as)
      ? cloneElement(<Fragment>{as}</Fragment>, props)
      : cloneElement(as, props)

  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  )
}

export const Header = forwardRef(HeaderInner)
