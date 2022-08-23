import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'

const thisCss = css<CharacterProps>``

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
