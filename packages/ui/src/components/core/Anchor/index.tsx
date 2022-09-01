import _ from 'lodash'
import { ComponentPropsWithoutRef, forwardRef, Ref, ReactNode } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { CheckSemanticAnchor } from './styled'

type WithoutChildren<Props> = Omit<Props, 'children'>

type Props = {
  ref: Ref<HTMLAnchorElement>
  children: ReactNode
} & CharacterProps &
  WithoutChildren<ComponentPropsWithoutRef<'a'>>

const AnchorInner = ({ children, ref, href, ..._props }: Props) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  return (
    <CheckSemanticAnchor {...props} ref={ref} href={href}>
      {children}
    </CheckSemanticAnchor>
  )
}

export const Anchor = forwardRef(AnchorInner)
