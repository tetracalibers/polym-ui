import styled, { css } from 'styled-components'
import { Heading } from '../../../core/Heading'
import { ColorPalette as $ } from 'styled-utility-first'

const variables = css`
  --paddingX: 0.4em;
  --paddingY: 1em;
  --main-color: rgb(240, 98, 146);
  --txt-color: #fff;
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
