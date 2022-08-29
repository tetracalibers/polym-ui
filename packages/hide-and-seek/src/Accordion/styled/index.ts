import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'

export const DetailWrapper = styled.div<CharacterProps>`
  &[aria-hidden='true'] {
    display: none;
  }
`

export const SummaryButton = styled.button`
  ${ResetCss.button}
  display: block;
`
