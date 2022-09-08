import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'

export const injectToFillGradientStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    /* gradient */
    --bg-color-1: ${theme.bgColor01};
    --bg-color-2: ${theme.bgColor02};
    --bg-color-3: ${theme.bgColor03};
    --slope: ${theme.slope}deg;
    /* box */
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
    /* onHover */
    --duration: ${theme.duration}s;
    /* shadow */
    --shadow-offsetX: ${theme.shadowOffsetXV + theme.shadowOffsetXU};
    --shadow-offsetY: ${theme.shadowOffsetYV + theme.shadowOffsetYU};
    --shadow-blur: ${theme.shadowBlurV + theme.shadowBlurU};
    --shadow-color: ${theme.shadowColor};
    /* border */
    --border-width: ${theme.borderWidthV + theme.borderWidthU};
    --border-style: ${theme.borderStyle};
    --border-color: ${theme.borderColor};
    /* color */
    --after-color: ${theme.afterColor};
  `}
  
  display: inline-block;
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--border-radius);

  text-decoration: none;
  outline: none;
  border: var(--border-width) var(--border-style) var(--border-color);

  transition: all var(--duration) ease-out;

  color: var(--border-color);

  &:hover {
    /*ボタンの形状*/
    border-color: transparent;
    color: var(--after-color);
    /*背景の色と形状*/
    background-image: linear-gradient(
      var(--slope),
      var(--bg-color-1) 0%,
      var(--bg-color-2) 50%,
      var(--bg-color-3) 100%
    );
    background-size: 200% auto;
    background-position: right center;
    /*ボックスの影*/
    box-shadow: var(--shadow-offsetX) var(--shadow-offsetY) var(--shadow-blur)
      var(--shadow-color);
  }
`
