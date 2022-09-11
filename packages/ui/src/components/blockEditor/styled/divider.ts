import styled from 'styled-components'

export const Divider = styled.span`
  display: flex;

  &::before,
  &::after {
    content: '';
    flex: 1;
  }
`

export const DividerLine = styled(Divider)`
  align-items: center;
  margin: 1em -1em;

  &::before,
  &::after {
    height: 1px;
    margin: 0 1em;
  }
`
