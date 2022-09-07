import styled, { css } from 'styled-components'
import { Emphasis, Highlight } from '../../markup'

const markerStyle = css`
  --marker-margin-top: 40%;
  --marker-color: #ff3;

  background: linear-gradient(
    rgba(255, 255, 255, 0) var(--marker-margin-top),
    var(--marker-color) var(--marker-margin-top)
  );
  /* 改行に対応 */
  display: inline;
`

export const Em = styled(Emphasis)`
  ${markerStyle}
`

export const Mark = styled(Highlight)`
  ${markerStyle}
`
