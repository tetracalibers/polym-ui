import { Alias, String as Str, Math, Union } from 'ts-typedef-helper'
import {
  DefaultProps,
  OptionRecord,
  OptionValueDictionary,
  ObjValTypeMap,
} from '../../types/api/getDefaultProps'
import _ from 'lodash'

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

    const defaultV = value.default
    const builded = (
      _.isUndefined(defaultV)
        ? building
        : {
            ...building,
            [key]: value.default!,
          }
    ) as DefaultProps<Options>

    if (nextRest.length > 0) {
      return _iterUnit<Str.To.Number<Math.Sum<idx, 1>>>(builded, nextRest)
    }
    return builded
  }

  return _iterUnit()
}

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { sampleP } from '../../sample/sample'

const s_getDefaultProps = getDefaultProps(sampleP)
//console.log('s_getDefaultProps =', s_getDefaultProps)
