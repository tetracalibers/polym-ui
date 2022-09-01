import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'

export const ResetStyleButton = styled.button`
  /* reset -------------------------------------- */
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  /* -------------------------------------------- */
  /* WARMING                                      */
  /* -------------------------------------------- */

  /* インタラクティブコンテンツを子要素に持つ場合、警告 */
  & button::after,
  & a::after,
  & [tabindex]::after {
    background-color: ${$.vivid.red};
    color: white;
    content: '[ERROR] invalid child element : "a" or "button" or "[tabindex]"';
  }
`

export const StyledButton = styled(ResetStyleButton)`
  /* normal ------------------------------------- */
  background-color: white;
  border-radius: 1em;
  border: 1px solid rgb(236, 239, 241);
  box-shadow: rgba(207, 216, 220, 0.4) 0px 2px 4px,
    rgba(207, 216, 220, 0.3) 0px 7px 13px -3px,
    rgba(207, 216, 220, 0.2) 0px -3px 0px inset;
  padding: 1em 2em;

  /* onFocus ------------------------------------ */
  outline: 2px solid transparent;
  outline-offset: 100px;
  transition: all 0.5 ease;

  &:focus,
  &:active {
    outline-color: ${$.pastel.water};
    outline-offset: -2px;
  }

  /* onClick ------------------------------------ */
  &:hover,
  &:active {
    position: relative;
    top: 3px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  &:disabled {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`
