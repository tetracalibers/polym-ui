import styled, { css } from 'styled-components'
import { StackProps } from './props'
import { margin, styleFor } from 'styled-utility-first'

export const Root = styled.div.attrs<StackProps>((props) => ({
  recursive: props.recursive,
  space: props.space
}))<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    ${margin.vertical.clear}
  }

  ${styleFor.continuousE({
    style: `margin-top: ${(props) => props.space}`,
    recursive: 
  })}
`
