import _ from 'lodash'
import { ComponentPropsWithoutRef, forwardRef, Ref, ReactNode } from 'react'
import { CharacterProps, defaultProps } from './model/props'

type WithoutChildren<Props> = Omit<Props, 'children'>

type Props = {
  ref: Ref<HTMLAnchorElement>
  children: ReactNode
} & CharacterProps &
  WithoutChildren<ComponentPropsWithoutRef<'a'>>

const AnchorInner = ({ children, ref, ..._props }: Props) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  return (
    <a {...props} ref={ref}>
      {children}
    </a>
  )
}

export const Anchor = forwardRef(AnchorInner)
