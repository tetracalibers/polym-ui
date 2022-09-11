import styled from 'styled-components'

export const PositionManager = styled.div`
  display: inline-block;
  position: relative;

  & > div {
    text-align: center;
  }

  /* tipの配置 */
  &[data-visible='true'] > :last-child {
    width: fit-content;
    padding: 0.5em;
    box-sizing: border-box;
    position: absolute;
    top: -125%;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
  }

  &[data-visible='true'] > :last-child * {
    line-height: 1;
  }
`
