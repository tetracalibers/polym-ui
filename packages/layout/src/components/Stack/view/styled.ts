import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { StackProps } from './props'
import { PUT, SELECT } from 'styled-utility-first'

class _Truthy<P> {
  private _prop: P
  constructor(prop: P) {
    this._prop = prop
  }

  when(cssTemplateLiteral: FlattenSimpleInterpolation) {
    return this._prop && cssTemplateLiteral
  }
}

const Truthy = <P>(prop: P) => new _Truthy<P>(prop)
const Exist = <P>(prop: P) => new _Truthy<P>(prop)

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

  // 既存の垂直マージンを削除
  & > * {
    ${PUT.margin.vertical.clear()}
  }

  // 連続する要素にだけ上方向のマージンを適用
  ${({ recursive, space }) => {
    return css`
      ${SELECT.continuousElements({ recursive })} {
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
