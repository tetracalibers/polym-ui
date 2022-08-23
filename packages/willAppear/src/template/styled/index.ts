import styled from 'styled-components'
import * as $ from './keyframes'

const animation = {
  fadeFrom: {
    here: $.fadeInKeyframes,
    bottom: $.fadeUpKeyframes,
    top: $.fadeDownKeyframes,
    left: $.fadeLeftKeyframes,
    right: $.fadeRightKeyframes,
  },
}

export const StyledElement = styled.div``
