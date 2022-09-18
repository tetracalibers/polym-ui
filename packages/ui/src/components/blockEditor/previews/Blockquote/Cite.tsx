import { Fragment } from 'react'
import { isWebUri } from 'valid-url'

export type CiteProps = {
  inline?: boolean
  children: string
}

export const Cite = ({ inline, children }: CiteProps) => {
  const isUrl = isWebUri(children)

  const Wrapper = isUrl ? 'a' : Fragment
  const wrapperProps = isUrl ? { href: children } : {}

  return (
    <Wrapper {...wrapperProps}>
      <cite>{children}</cite>
    </Wrapper>
  )
}
