import styled, { css } from 'styled-components'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'
import { flowNotPhrasing } from '@polym/semantic-html-data'

const alertStyle = css`
  background-color: ${$.vivid.red};
  color: white;
  pointer-events: none;
  display: block;
`

/* -------------------------------------------- */

/* インタラクティブコンテンツを子要素に持つ場合、警告 */
export const CannotIncludeInteractiveElements = css`
  & button::after,
  & a::after,
  & [tabindex]::after {
    ${alertStyle}
    content: '[HTML WARMING] invalid child element : "a", "button", "[tabindex]"';
  }
`

/* 内容モデルがPhrasingの場合の子要素違反をチェック */
export const CannotIncludeIfContentModelIsPhasing = css`
  & ${flowNotPhrasing.join('::after, ')} {
    ${alertStyle}
    font-size: 1rem;
    content: '[HTML WARMING] invalid child element : ${flowNotPhrasing
      .map(selector => `"${selector}"`)
      .join(', ')}"';
  }
`

/* aタグをbuttonタグとして使わない */
export const AtagIsNotButtonTag = css`
  &[href='javascript:void(0)']:not([role='button'])::after,
  &[onclick]:not([role='button'])::after {
    ${alertStyle}
    content: '[A11Y WARMING] Screen reader users will not know that it is a button; use the button tag or add role="button".'
  }
`

/* markタグを入れ子にしない（冗長なマークアップ） */
export const NoMarkWithinMark = css`
  & mark::after {
    ${alertStyle}
    content: '[A11Y WARMING] Nesting "mark" tags is redundant markup. Some screen readers may read the meaning of this tag multiple times, leading to user stress.'
  }
`
