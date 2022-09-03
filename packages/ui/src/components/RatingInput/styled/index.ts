import styled from 'styled-components'
import { IconOnly } from '../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'

export const RateButton = styled(IconOnly.Button)`
  ${ResetCss.button}

  font-size: 3rem;
  cursor: pointer;
  padding: 0.25rem;

  svg {
    fill: #b8c6db80;
    margin: 0 0.1rem;
  }

  &[data-coloring='true'] svg {
    fill: #ebf928;
    filter: drop-shadow(0px 0px 6px ivory);
    transform: translateZ(0);
  }
`
