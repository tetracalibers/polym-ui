import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { Truthy } from 'styled-utility-first'

const sidebarStyle = (sideWidth: CharacterProps['sideWidth']) => {
  return css`
    /* サイドバーらしい幅 */
    flex-basis: ${sideWidth};
    flex-grow: 1;
  `
}

const mainStyle = (mainMinWidth: CharacterProps['mainMinWidth']) => {
  return css`
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${mainMinWidth}%;
  `
}

export const StyledElement = styled.div<CharacterProps>`
  && {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ spaceBetween }) => spaceBetween};
  }

  ${({ noStretch }) => {
    return Truthy(noStretch).when(css`
      && {
        align-items: flex-start;
      }
    `)
  }}

  ${({ sidebarChild, mainMinWidth, sideWidth }) => {
    return match(sidebarChild)
      .with('first', () => {
        return css`
          & > :first-child {
            ${sidebarStyle(sideWidth)}
          }
          & > :last-child {
            ${mainStyle(mainMinWidth)}
          }
        `
      })
      .with('last', () => {
        return css`
          & > :first-child {
            ${mainStyle(mainMinWidth)}
          }
          & > :last-child {
            ${sidebarStyle(sideWidth)}
          }
        `
      })
      .exhaustive()
  }}
`
