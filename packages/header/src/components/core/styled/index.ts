import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const defaultImgStyle = css<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  width: var(--width);
  height: var(--height);
`

export const Img = styled.img<CharacterProps>`
  ${defaultImgStyle}
`
