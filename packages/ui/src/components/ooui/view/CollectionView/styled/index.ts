import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { Grid } from '../../../../layout-algorithm/Grid'
import { SummaryFlex } from '../../SummaryCard/styled'

const pastel = [
  'rgba(227, 163, 171, .1)',
  'rgba(202, 226, 230, .1)',
  'rgba(204, 223, 181, .1)',
  'rgba(194, 199, 225, .1)',
]

export const SummaryCardGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  box-sizing: border-box;

  && {
    grid-gap: 1.5rem;
  }

  & > * {
    box-shadow: rgba(136, 165, 191, 0.48) 3px 1px 8px 0px,
      rgba(255, 255, 255, 0.8) -3px -1px 8px 0px;
  }

  & ${SummaryFlex}:nth-child(4n+1) {
    background-image: linear-gradient(
      -90deg,
      ${pastel[0]} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  & ${SummaryFlex}:nth-child(4n+2) {
    background-image: linear-gradient(
      -90deg,
      ${pastel[1]} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  & ${SummaryFlex}:nth-child(4n+3) {
    background-image: linear-gradient(
      -90deg,
      ${pastel[2]} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  & ${SummaryFlex}:nth-child(4n+4) {
    background-image: linear-gradient(
      -90deg,
      ${pastel[3]} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`
