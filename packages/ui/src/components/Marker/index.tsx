import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { MarkerCoreProps } from './model/props'
import { Em, Mark } from './styled/marker'

export type MarkerProps = {
  children: ReactNode
} & MarkerCoreProps &
  Omit<ComponentPropsWithoutRef<'em'>, 'children'>

export const Marker = ({ children, byAuthor, ...props }: MarkerProps) => {
  return byAuthor ? (
    <Em {...props}>{children}</Em>
  ) : (
    <Mark {...props}>{children}</Mark>
  )
}
