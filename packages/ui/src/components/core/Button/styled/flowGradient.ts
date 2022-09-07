import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'

export const injectFlowGradientStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    --bg-color-1: ${theme.bgColor01};
    --bg-color-2: ${theme.bgColor02};
    --bg-color-3: ${theme.bgColor03};
    --bg-color-4: ${theme.bgColor04};
    --slope: ${theme.slope}deg;
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --duration: ${theme.duration}s;
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
  `}

  /*ボタンの形状*/
  display: inline-block;
  text-decoration: none;
  outline: none;

  /*背景の色と形状*/
  background: linear-gradient(
    var(--slope),
    var(--bg-color-1) 0%,
    var(--bg-color-2) 25%,
    var(--bg-color-3) 51%,
    var(--bg-color-4) 100%
  );
  background-position: 1% 50%;
  background-size: 200% auto;
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--border-radius);
  transition: all var(--duration) ease-out;

  &:hover {
    background-position: 99% 50%;
  }
`
