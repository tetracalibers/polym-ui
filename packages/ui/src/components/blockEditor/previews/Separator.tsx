import styled from 'styled-components'

export const Separator = styled.div`
  --bg-color: rgba(255, 255, 255, 0.9);
  --thickness: 1.5px;

  width: 100%;
  height: var(--thickness);
  display: block;
  position: relative;
  margin-bottom: 0em;
  padding: 1rem 0;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: var(--thickness);
    bottom: 50%;
    left: 0;
    background: linear-gradient(
      to right,
      transparent 1%,
      #f2ea7d 5%,
      #62efab 15%,
      #62efab 25%,
      #ff8797 35%,
      #ff8797 45%,
      #e1a4f4 55%,
      #e1a4f4 65%,
      #82fff4 75%,
      #82fff4 85%,
      #f2ea7d 95%,
      transparent 99%
    );
    background-size: 100%;
    background-position: 0%;
    opacity: 0.75;
  }
`
