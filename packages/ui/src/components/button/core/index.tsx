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
import { StyledButton } from './styled'

type AllowElement = StyledComponent<'button', any> | ReactElement<any, 'button'>

export type ButtonProps<As extends AllowElement> = {
  ref?: Ref<HTMLButtonElement>
  as?: As
} & CharacterProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'children'>

const ButtonInner = <As extends AllowElement>(
  { as, ..._props }: ButtonProps<As>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  if (isStyledComponent(as)) {
    as.defaultProps
  }

  if (!as) {
    return <button {...props} ref={ref} />
  }

  const Component = (props: Omit<ButtonProps<As>, 'as'>) =>
    isStyledComponent(as)
      ? cloneElement(<Fragment>{as}</Fragment>, props)
      : cloneElement(as, props)

  return <Component {...props} ref={ref} />
}

export const Button = forwardRef(ButtonInner)
