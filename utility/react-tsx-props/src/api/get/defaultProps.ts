import { Alias, String as Str, Math, Union } from 'ts-typedef-helper'
import {
  DefaultProps,
  OptionRecord,
  OptionValueDictionary,
  ObjValTypeMap,
  DefaultPropsBuilder,
} from '../../types/api/getDefaultProps'

export const getDefaultProps = (options: OptionRecord<Alias.Primitive>) => {
  const entries = Object.entries(options)

  type Options = typeof options
  type OptionKey = keyof Options
  type OptionValue = ObjValTypeMap<Options, OptionKey>
  type AtOptionKey<idx extends number> = Union.To.Tuple<OptionKey>[idx]

  const _iterUnit = <idx extends number = 0>(
    building: DefaultProps<Options> = {} as DefaultProps<Options>,
    restEntries = entries
  ): DefaultProps<Options> => {
    const [entry, ...nextRest] = restEntries

    type NowKey = AtOptionKey<idx>
    type NowVal = OptionValue[NowKey]

    const key = entry[0] as NowKey
    const value = entry[1] as OptionValueDictionary<NowVal>

    const builded = {
      ...building,
      [key]: value.default,
    } as DefaultPropsBuilder<typeof building>

    if (nextRest.length > 0) {
      return _iterUnit<Str.To.Number<Math.Sum<idx, 1>>>(builded, nextRest)
    }
    return builded
  }

  return _iterUnit()
}
