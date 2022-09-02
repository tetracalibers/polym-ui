import styled, { css } from 'styled-components'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'

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
    content: '[HTML WARMING] invalid child element : "a" or "button" or "[tabindex]"';
  }
`

/* 内容モデルがPhrasingの場合の子要素違反をチェック */
export const CannotIncludeIfContentModelIsPhasing = css``

/* aタグをbuttonタグとして使わない */
export const AtagIsNotButtonTag = css`
  &[href='javascript:void(0)']:not([role='button'])::after,
  &[onclick]:not([role='button'])::after {
    ${alertStyle}
    content: '[A11Y WARMING] Screen reader users will not know that it is a button; use the button tag or add role="button".'
  }
`
