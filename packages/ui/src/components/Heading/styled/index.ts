import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { LevelOptions } from '../model/props'
import { ColorPalette as $ } from 'styled-utility-first'

export const SemanticHeading = styled.h1`
  --h1-size: 1.75rem;
  --h2-size: 1.75rem;
  --h3-size: 1.5rem;
  --h4-size: 1.25rem;
  --h5-size: 1.125rem;
  --h6-size: 1.125rem;

  ${({ theme }) => css`
    font-size: var(${'--h' + theme.level + '-size'});
  `}
`

export const Inner = styled.span``

const variables = css`
  --paddingX: 0.4em;
  --paddingY: 1em;
  --main-color: rgb(240, 98, 146);
  --txt-color: ${$.grayScale.dark};
`

const defaultStyle = {} as {
  [k in LevelOptions as `h${k}`]: FlattenSimpleInterpolation
}

defaultStyle.h1 = css`
  padding: var(--paddingY) var(--paddingX);
  background-color: var(--main-color);
  color: #fff;
  text-align: center;
  font-weight: bold;

  ${Inner} {
    position: relative;
    display: inline-block;
    transform: translateY(-20%);
  }

  ${Inner}::after {
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

defaultStyle.h2 = css`
  padding-bottom: 0.4em;
  border-bottom: min(0.25em, 4px) solid var(--main-color);
  font-weight: bold;
  color: var(--txt-color);
`

defaultStyle.h3 = css`
  padding-bottom: 6px;
  border-bottom: min(0.125em, 2px) solid var(--main-color);
  font-weight: bold;
  color: var(--txt-color);
`

defaultStyle.h4 = css`
  padding-left: 0.375em;
  border-left: min(0.125em, 2px) solid var(--main-color);
  font-weight: bold;
  color: var(--txt-color);
`

defaultStyle.h5 = css`
  color: var(--main-color);
  font-weight: bold;
`

export const STyledHeading = styled(SemanticHeading)`
  ${variables}

  ${({ theme }) =>
    defaultStyle[`h${theme.level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6']}
`
