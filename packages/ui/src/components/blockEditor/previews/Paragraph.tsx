import styled from 'styled-components'

export type ParagraphBlockProps = {
  children: string
  isInline?: boolean
}

const inlineParagraph = styled.p`
  display: inline;
`

export const ParagraphBlock = ({
  children,
  isInline = false,
}: ParagraphBlockProps) => {
  const Tag = isInline ? inlineParagraph : 'p'

  return <Tag>{children}</Tag>
}
