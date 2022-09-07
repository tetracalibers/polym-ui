import styled from 'styled-components'
import { CannotIncludeIfContentModelIsPhasing } from '../../../css/alert'

export const CheckSemanticEmTag = styled.em`
  /* 斜体を解除 */
  font-style: normal;

  /* 内容モデルはPhrasing */
  ${CannotIncludeIfContentModelIsPhasing}
`

export const CheckSemanticStrongTag = styled.strong`
  /* 太字を解除 */
  font-style: normal;

  /* 内容モデルはPhrasing */
  ${CannotIncludeIfContentModelIsPhasing}
`

export const CheckSemanticMarkTag = styled.mark`
  /* マーカー表示を解除 */
  font-style: normal;
  background-color: inherit;
  color: inherit;

  /* 内容モデルはPhrasing */
  ${CannotIncludeIfContentModelIsPhasing}
`
