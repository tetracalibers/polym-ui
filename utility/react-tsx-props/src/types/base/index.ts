import { Alias } from 'ts-typedef-helper'

export class PropTypeWrap<_T> {}

export type OptionValueDictionary<T = unknown> = {
  instance: PropTypeWrap<T>
  default: T | undefined
  required: boolean
}

export type OptionRecord<T = Alias.Primitive> = {
  [k: string]: OptionValueDictionary<T>
}

export type GetOptionalKey<O extends OptionRecord> = keyof {
  [k in keyof O as O[k]['required'] extends false ? k : never]: O[k]
}
