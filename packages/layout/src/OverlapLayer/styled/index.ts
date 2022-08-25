import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { Truthy } from 'styled-utility-first'

export const StyledContainer = styled.div`
  position: relative;
`

export const OverlayWrapper = styled.div<CharacterProps>`
  --position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};

  position: var(--position);
  /* 左上の角が中央になるように配置 */
  top: 50%;
  left: 50%;
  /* 要素の中央がコンテナの中央になるよう修正 */
  transform: translate(-50%, -50%);

  /* はみ出し対策 */
  ${({ contain, marginValue, marginUnit }) => {
    return Truthy(contain).when(css`
      /* 単位を含めないとcalc関数が無効になってしまう */
      --margin: ${marginValue}${marginUnit};

      /* コンテンツが隠れてしまわないようスクロールバーを提供 */
      overflow: auto;
      /* marginも含めて高さと幅を制限 */
      max-width: calc(100% - var(--margin) * 2);
      max-height: calc(100% - var(--margin) * 2);
    `)
  }}
`
