import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

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

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
