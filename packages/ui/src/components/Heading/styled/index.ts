import styled, { css } from 'styled-components'

export const StyledHeading = styled.h1`
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
