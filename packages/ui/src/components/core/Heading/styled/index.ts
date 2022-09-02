import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { LevelOptions } from '../model/props'
import { ColorPalette as $ } from 'styled-utility-first'
import { CannotIncludeIfContentModelIsPhasing } from '../../../../css/alert'

const resets = css`
  margin-top: 0;
  margin-bottom: 0;
`

export const SemanticHeading = styled.h1`
  ${resets}
  ${CannotIncludeIfContentModelIsPhasing}

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
