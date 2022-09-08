import { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'

const shine = keyframes`
  100% {
    left: 125%;
  }
`

export const injectShineStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    --bg-color: ${theme.bgColor};
    --duration: ${theme.duration}s;
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
  `}

  /*キラッと光る基点とするためrelativeを指定*/
  position: relative;
  /*ボタンの形状*/
  display: inline-block;
  background: var(--bg-color);
  padding: var(--paddingY) var(--paddingX);
  text-decoration: none;
  outline: none;
  overflow: hidden;
  border-radius: var(--border-radius);

  &::before {
    content: '';
    /*絶対配置でキラッと光るの位置を決める*/
    position: absolute;
    top: 0;
    left: -75%;
    /*キラッと光る形状*/
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: skewX(-25deg);
  }

  &:hover::before {
    animation: ${shine} var(--duration);
  }
`
