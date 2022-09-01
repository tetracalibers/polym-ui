import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'

export const CheckSemanticAnchor = styled.a`
  /* インタラクティブコンテンツを子要素に持つ場合、警告 */
  & button::after,
  & a::after,
  & [tabindex]::after {
    background-color: ${$.vivid.red};
    color: white;
    content: '[ERROR] invalid child element : "a" or "button" or "[tabindex]"';
  }
`
