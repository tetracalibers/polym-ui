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
