import { match } from 'ts-pattern'
import styled, { css } from 'styled-components'
import { StackProps } from './props'
import { PUT, SELECT } from 'styled-utility-first'

export const Root = styled.div.attrs<StackProps>(props => ({
  recursive: props.recursive,
  space: props.space,
}))<StackProps>`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & > * {
    ${PUT.margin.vertical.clear()}
  }

  ${props => `
    ${SELECT.continuousElements({ recursive: props.recursive })} {
      margin-top: ${props.space}
    }
  `}
`
