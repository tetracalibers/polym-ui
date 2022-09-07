import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'

const baseStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    /* gradient */
    --bg-color-1: ${theme.bgColor01};
    --bg-color-2: ${theme.bgColor02};
    --slope: ${theme.slope}deg; // 90
    /* box */
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
    /* onHover */
    --duration: ${theme.duration}s;
    --scale-factor: ${theme.scaleFactor}; // 0.05
  `}
`

const shrinkStyle = css`
  /*背景の色と形状*/
  background: linear-gradient(to right, #52a0fd 0%, #00e2fa 80%, #00e2fa 100%);
  /* offsetX offsetY blurRadius */
  box-shadow: 0 15px 15px rgba(82, 160, 253, 0.4);

  &:hover {
    transform: scale(0.95);
  }
`

const expandStyle = css`
  /*背景色*/
  background: linear-gradient(to right, #44ea76 0%, #39fad7 80%, #39fad7 100%);

  /*hoverした際のスケールで全体を拡大し影を付ける*/
  &:hover {
    transform: scale(1.05);
    /*ボックスの影*/
    box-shadow: 0 15px 15px rgba(57, 250, 215, 0.4);
  }
`

export const injectScaleGradientStyle = css`
  ${baseStyle}
`
