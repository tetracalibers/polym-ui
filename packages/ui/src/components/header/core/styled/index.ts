import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const defaultHeaderStyle = css<CharacterProps>``

export const Header = styled.header<CharacterProps>`
  ${defaultHeaderStyle}
`
