import styled, { css } from 'styled-components'

const tipPositioning = css`
  display: inline-block;
  width: fit-content;
  padding: 0.5em;
  box-sizing: border-box;
  position: absolute;
  top: -125%;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
`

const tipInnerPositioning = css`
  line-height: 1;
`

export const PositionManager = styled.div`
  display: inline-block;
  position: relative;

  & > div {
    text-align: center;
  }

  /* tipの配置 */
  & > :last-child {
    display: none;
  }

  /* PCの場合は:hover時に表示 */
  @media (hover: hover) {
    &:hover > :last-child {
      ${tipPositioning}
    }

    &:hover > :last-child * {
      ${tipInnerPositioning}
    }
  }

  /* mobileの場合は:active時に表示 */
  @media (hover: none) {
    &:active > :last-child {
      ${tipPositioning}
    }

    &:active > :last-child * {
      ${tipInnerPositioning}
    }
  }
`
