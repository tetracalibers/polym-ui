import { FlattenSimpleInterpolation } from 'styled-components'

class _Truthy<P> {
  private _prop: P
  constructor(prop: P) {
    this._prop = prop
  }

  when(cssTemplateLiteral: FlattenSimpleInterpolation) {
    return this._prop && cssTemplateLiteral
  }
}

export const Truthy = <P>(prop: P) => new _Truthy<P>(prop)
export const Exist = <P>(prop: P) => new _Truthy<P>(prop)
