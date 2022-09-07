import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { GradientStyleProps } from '../model/style'

export const injectToFillGradientStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    /* gradient */
    --bg-color-1: ${theme.bgColor01};
    --bg-color-2: ${theme.bgColor02};
    --bg-color-3: ${theme.bgColor03};
    --slope: ${theme.slope}deg; // 270
    /* box */
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
    /* onHover */
    --duration: ${theme.duration}s; // 0.4
  `}
  
  display: inline-block;
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--border-radius);

  text-decoration: none;
  outline: none;

  border: 1px solid #fa6c9f;

  transition: all var(--duration) ease-out;

  &:hover {
    /*ボタンの形状*/
    border-color: transparent;
    color: #fff;
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
    box-shadow: 0 5px 10px rgb(230, 238, 156);
  }
`
