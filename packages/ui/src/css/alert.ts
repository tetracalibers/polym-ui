import styled, { css } from 'styled-components'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'

const alertStyle = css`
  background-color: ${$.vivid.red};
  color: white;
  pointer-events: none;
  display: block;
`

export const CannotIncludeInteractiveElements = css`
  /* インタラクティブコンテンツを子要素に持つ場合、警告 */
  & button::after,
  & a::after,
  & [tabindex]::after {
    ${alertStyle}
    content: '[HTML WARMING] invalid child element : "a" or "button" or "[tabindex]"';
  }
`

export const AtagIsNotButtonTag = css`
  /* aタグをbuttonタグとして使わない */
  &[href='javascript:void(0)']:not([role='button'])::after,
  &[onclick]:not([role='button'])::after {
    ${alertStyle}
    content: '[A11Y WARMING] Screen reader users will not know that it is a button; use the button tag or add role="button".'
  }
`
