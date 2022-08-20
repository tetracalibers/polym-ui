import styled from 'styled-components'
import { RotatingButtonProps } from './../model/props'
import { provideCssProps, ResetCss } from 'styled-utility-first'

export const RotatingStyled = styled.button<RotatingButtonProps>`
  ${ResetCss.button}
  ${provideCssProps.as('componentBaseButton')}
  
  /* 背景の基点 */
  position: relative;
  /* ボタンの形状 */
  display: inline-block;
  width: 100%;
  max-width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  outline: none;

  & span {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #333;
    /* 重なりを3dで表示 */
    transform-style: preserve-3d;
    /* 数字が小さくなるほど早く回転 */
    transition: 0.5s;
  }
`
