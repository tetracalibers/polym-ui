import { ComponentPropsWithoutRef, ReactNode } from 'react'

type EmTagProps = {
  byAuthor: false
  isImportant: false
} & Omit<ComponentPropsWithoutRef<'em'>, 'children'>

type MarkTagProps = {
  byAuthor: true
  isImportant: boolean
} & Omit<ComponentPropsWithoutRef<'mark'>, 'children'>

type StrongTagProps = {
  byAuthor: boolean
  isImportant: true
} & Omit<ComponentPropsWithoutRef<'strong'>, 'children'>

export type MarkerProps = {
  children: ReactNode
} & (EmTagProps | MarkTagProps | StrongTagProps)

export const Marker = ({
  children,
  byAuthor,
  isImportant,
  ...props
}: MarkerProps) => {}
