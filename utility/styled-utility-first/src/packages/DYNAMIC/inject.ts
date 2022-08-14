import { css } from 'styled-components'
import * as CSST from 'csstype'
import { Alias, Object as Obj } from 'ts-typedef-helper'
import { $ } from 'react-tsx-props/util-types'

type FieldType<Field> = 's' extends Field
  ? string
  : 'f' extends Field
  ? number
  : 'i' extends Field
  ? number
  : 'd' extends Field
  ? number
  : 'o' extends Field
  ? HTMLElement
  : 'O' extends Field
  ? object
  : 'c' extends Field
  ? string
  : never

type ExtractFields<T> = T extends `${infer _}%${infer Field}${infer R}`
  ? [FieldType<Field>, ...ExtractFields<R>]
  : T extends `${infer _}%${infer Field}`
  ? [FieldType<Field>]
  : []

function log<Fmt extends string>(fmt: Fmt, ...args: ExtractFields<Fmt>): void {
  console.log(fmt, ...args)
}

export type ObjKeyCast<
  K extends Alias.ObjIndex,
  T extends Alias.ObjIndex = string
> = K extends infer Keys ? (Keys extends T ? Keys : never) : never

const property = <PropType>(
  hashes: TemplateStringsArray,
  ...props: string[]
): string => {
  // 正常系は従来通りのテンプレートリテラルの結果を返せば良い
  // hashes[0] -> values[0] -> hashes[1]のように結合していく
  return props
    .map((value, index) => hashes[index] + value)
    .concat(hashes.slice(props.length))
    .join('')
}

log('Stuff: %s %f %O', 'Hello', 123, { ok: true })

type CssRuleWithProps<
  PropType,
  PropName extends keyof PropType = keyof PropType
> = {}

// INJECT.props(/** destructured props to use */).selector().style()
export class INJECT<PropType> {
  public _InjectProps = class extends INJECT<PropType> {
    protected _props: PropType

    constructor(props: PropType) {
      super()
      this._props = props
    }

    private _SetSelector = class implements ThisType<this> {
      protected _selector: string

      constructor(selector: string) {
        this._selector = selector
      }

      private _SetStyle = class implements ThisType<this> {
        constructor(style: CssRuleWithProps<PropType>[]) {}
      }
    }

    selector(selector: string) {
      return new this._SetSelector(selector)
    }
  }
}

export namespace INJECT {
  const props = <PropType>(props: PropType) => {
    const InjectProps = new INJECT<PropType>()._InjectProps
    return new InjectProps(props)
  }
}
