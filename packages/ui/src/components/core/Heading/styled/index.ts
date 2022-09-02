import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { LevelOptions } from '../model/props'
import { ColorPalette as $ } from 'styled-utility-first'

const resets = css`
  margin-top: 0;
  margin-bottom: 0;
`

export const SemanticHeading = styled.h1`
  ${resets}

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
