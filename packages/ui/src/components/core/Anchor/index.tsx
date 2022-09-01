import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  ReactNode,
  ForwardedRef,
} from 'react'
import { CharacterProps, defaultAnchorCoreProps } from './model/props'
import { CheckSemanticAnchor } from './styled'

export type AnchorCoreProps = {
  ref: ForwardedRef<HTMLAnchorElement>
  children: ReactNode
} & CharacterProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'href'>

const AnchorInner = ({
  children,
  ref,
  href,
  openInNewTab,
  ..._props
}: AnchorCoreProps) => {
  const props = _.mergeWith(_props, defaultAnchorCoreProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  const openControl = openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <CheckSemanticAnchor {...props} ref={ref} href={href} {...openControl}>
      {children}
    </CheckSemanticAnchor>
  )
}

export const Anchor = forwardRef(AnchorInner)
