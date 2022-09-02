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

  padding: var(--paddingY) var(--paddingX);
  background-color: var(--main-color);
  color: var(--txt-color);
  text-align: center;
  font-weight: bold;
`

export const Inner = styled.span`
  && {
    position: relative;
    display: inline-block;
    transform: translateY(-20%);
  }

  &&::after {
    content: '';
    position: absolute;
    bottom: calc(-1 * var(--paddingX));
    left: 50%;
    width: 3em;
    height: 1px;
    background-color: currentColor;
    transform: translateX(-50%);
  }
`
