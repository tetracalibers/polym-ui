import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import { TagType } from '../../common/props'

const thisCss = css<CharacterProps>``

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
