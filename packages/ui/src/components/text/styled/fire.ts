import { css } from 'styled-components'
import { match } from 'ts-pattern'
import { TextFireStyleProps } from '../model/style'

const shadow = css`
  text-shadow: 0 -1px 5px #fff, 0 -5px 10px #ff0, 0 -10px 25px #f80,
    0 -20px 50px #f00;
`

export const injectFireStyle = css`
  ${({ theme }) => css`
    --duration: ${theme.duration}s;
  `}
  transition: var(--duration);

  ${({ theme }) => theme.trigger === 'none' && shadow}

  &:hover {
    ${({ theme }) => theme.trigger === 'hover' && shadow}
  }
`
