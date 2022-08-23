import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { ElementType } from 'react'
import { match } from 'ts-pattern'

const animation = {
  fadeFrom: {
    here: $.fadeInKeyframes,
    bottom: $.fadeUpKeyframes,
    top: $.fadeDownKeyframes,
    left: $.fadeLeftKeyframes,
    right: $.fadeRightKeyframes,
  },
}

const thisCss = css<CharacterProps>``

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
