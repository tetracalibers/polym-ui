import styled, { css } from 'styled-components'
import { StackProps } from './props'
import { PUT, SELECT } from 'styled-utility-first'

export const Root = styled.div.attrs<StackProps>(props => ({
  recursive: props.recursive,
  space: props.space,
  separateFrom: props.separateFrom,
}))<StackProps>`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & > * {
    ${PUT.margin.vertical.clear()}
  }

  ${({ recursive, space }) => {
    const selector = SELECT.continuousElements({ recursive })
    return css`
      ${selector} {
        margin-top: ${space};
      }
    `
  }}

  ${({ separateFrom }) => {
    return (
      separateFrom &&
      css`
        & > :nth-child(${separateFrom}) {
          margin-bottom: auto;
        }
      `
    )
  }}
`
