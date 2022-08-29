import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'

export const Wrapper = styled.div`
  && *:focus {
    outline: 2px solid ${$.pastel.water};
  }
`
