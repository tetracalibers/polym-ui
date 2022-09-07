import { ComponentPropsWithoutRef, ReactNode } from 'react'
import {
  CheckSemanticEmTag,
  CheckSemanticMarkTag,
  CheckSemanticStrongTag,
} from './styled/checker'

/* -------------------------------------------- */

export type EmTagProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'em'>, 'children'>

export const Emphasis = ({ children, ...props }: EmTagProps) => {
  return <CheckSemanticEmTag {...props}>{children}</CheckSemanticEmTag>
}

/* -------------------------------------------- */

export type StrongTagProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'strong'>, 'children'>

export const Important = ({ children, ...props }: StrongTagProps) => {
  return <CheckSemanticStrongTag {...props}>{children}</CheckSemanticStrongTag>
}

/* -------------------------------------------- */

export type MarkTagProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'mark'>, 'children'>

export const Highlight = ({ children, ...props }: MarkTagProps) => {
  return <CheckSemanticMarkTag {...props}>{children}</CheckSemanticMarkTag>
}
