import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

export const SlideBackground: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>``

export const ChildrenWrapper: StyledComponent<
  TagType,
  {}
> = styled.span<CharacterProps>``
