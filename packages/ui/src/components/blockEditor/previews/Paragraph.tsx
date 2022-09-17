import styled, { css } from 'styled-components'

export type ParagraphBlockProps = {
  children: string
  isInline?: boolean
}

const contentStyle = css`
  margin: 0;
  line-height: 1.5em;
  /* 改行 */
  overflow-wrap: break-word;
  word-wrap: break-word;
  /* 均等配置（両端揃え） */
  text-align: justify;
  text-justify: inter-ideograph;
  /* ハイフン */
  hyphens: auto;
`

const blockParagraph = styled.p`
  ${contentStyle}
`

const inlineParagraph = styled.p`
  ${contentStyle}
  display: inline;
`

export const ParagraphPreview = ({
  children,
  isInline = false,
}: ParagraphBlockProps) => {
  const Tag = isInline ? inlineParagraph : blockParagraph

  return <Tag>{children}</Tag>
}
