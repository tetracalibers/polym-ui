import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'

const thisCss = css<CharacterProps>``

export const StyledButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${thisCss}
`

export const StyledLink = styled.a<CharacterProps>`
  ${thisCss}
`
