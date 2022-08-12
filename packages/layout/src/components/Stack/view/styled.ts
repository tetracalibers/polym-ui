import styled, { css } from 'styled-components'
import { StackProps } from './props'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${(props: Pick<StackProps, 'recursive' | 'space'>) => {
    const { recursive, space } = props
    if (recursive) {
      return css`
        & * + * {
          margin-top: ${space};
        }
      `
    } else {
      return css`
        & > * + * {
          margin-top: props(space);
        }
      `
    }
  }}
`
