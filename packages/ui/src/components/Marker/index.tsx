import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Emphasis, Highlight, Important } from '../markup'
import { MarkerCoreProps } from './model/props'

export type MarkerProps = {
  children: ReactNode
} & MarkerCoreProps &
  Omit<ComponentPropsWithoutRef<'em'>, 'children'>

export const Marker = ({ children, byAuthor, ...props }: MarkerProps) => {
  return byAuthor ? (
    <Emphasis {...props}>{children}</Emphasis>
  ) : (
    <Highlight {...props}>{children}</Highlight>
  )
}
