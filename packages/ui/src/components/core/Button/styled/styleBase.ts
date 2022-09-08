import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'

export const injectBaseStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    /* box */
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
  `}
  
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--border-radius);
  text-decoration: none;
  outline: none;
`
