import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'
import {
  AtagIsNotButtonTag,
  CannotIncludeInteractiveElements,
} from '../../../../css/alert'

export const CheckSemanticAnchor = styled.a`
  /* インタラクティブコンテンツを子要素に持つ場合、警告 */
  ${CannotIncludeInteractiveElements}
  /* ボタンとして使用しようとしている場合に警告 */
  ${AtagIsNotButtonTag}
`
