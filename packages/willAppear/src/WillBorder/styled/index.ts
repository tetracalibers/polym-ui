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

// 上下線が伸びる設定
export const WillHorizontalLine = styled.div``

// 左右線が伸びる設定
export const WillVerticalLine = styled.div``

export const ChildrenWrapper: StyledComponent<TagType, {}> = styled.div``
