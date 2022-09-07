import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { CheckSemanticEmTag, CheckSemanticStrongTag } from './styled/checker'

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
