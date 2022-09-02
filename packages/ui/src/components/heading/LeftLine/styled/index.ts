import styled, { css } from 'styled-components'
import { Heading } from '../../../core/Heading'
import { ColorPalette as $ } from 'styled-utility-first'

const variables = css`
  ${({ theme }) => css`
    --padding-bottom: ${theme.paddingBottomV + theme.paddingBottomU};
    --line-thickness: ${theme.lineThicknessV + theme.lineThicknessU};
    --main-color: ${theme.lineColor};
    --txt-color: ${theme.color};
    --line-style: ${theme.lineStyle};
  `}
`

export const STyledHeading = styled(Heading)`
  ${variables}

  padding-left: 0.375em;
  border-left: 0.25ch var(--line-style) var(--main-color);
  font-weight: bold;
  color: var(--txt-color);
`
