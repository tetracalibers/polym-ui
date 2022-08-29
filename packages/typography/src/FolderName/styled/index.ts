import styled, { css } from 'styled-components'
import { match } from 'ts-pattern'
import { CharacterProps } from '../model/props'
import { ResetCss } from 'styled-utility-first'

export const Wrapper = styled.div`
  && {
    cursor: pointer;
    user-select: none;
  }
`
