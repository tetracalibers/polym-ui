import styled, { css } from 'styled-components'
import { Heading } from '../../../core/Heading'
import { ColorPalette as $ } from 'styled-utility-first'

const variables = css`
  ${({ theme }) => css`
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --main-color: ${theme.bgColor};
    --txt-color: ${theme.color};
  `}
`

export const STyledHeading = styled(Heading)`
  ${variables}

  padding-bottom: 0.4em;
  border-bottom: 0.25ex solid var(--main-color);
  font-weight: bold;
  color: var(--txt-color);
`
