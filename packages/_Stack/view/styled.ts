import styled, { css } from 'styled-components'
import { StackProps } from './props'
import { PUT, SELECT, Exist } from 'styled-utility-first'

type RootProps = Omit<StackProps, 'isList'>

export const Root = styled.div<RootProps>`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  // 既存の垂直マージンを削除
  & > * {
    ${PUT.margin.vertical.clear()}
  }

  // 連続する要素にだけ上方向のマージンを適用
  ${({ recursive, space }) => {
    return css`
      ${SELECT.continuousE({ recursive })} {
        margin-top: ${space};
      }
    `
  }}

  // "separateFrom"より下のボックスを下部にまとめるため隙間を空ける
  ${({ separateFrom }) => {
    return Exist(separateFrom).when(css`
      & > :nth-child(${separateFrom}) {
        margin-bottom: auto;
      }
    `)
  }}
`
