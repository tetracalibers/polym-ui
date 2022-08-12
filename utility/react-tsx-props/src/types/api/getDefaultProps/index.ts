import { GetOptionalKey, OptionRecord, OptionValueDictionary } from '../../base'
import { ObjValTypeMap } from '../../ObjValueUnionBuilder'
import { OptionValuePicker } from './helper'

type DefaultProps<O extends OptionRecord = OptionRecord> = {
  [k in keyof O as k extends GetOptionalKey<O> ? never : k]: {
    default: OptionValuePicker<k, O>
  }
}

type DefaultPropsBuilder<B extends DefaultProps> = B & {
  NowKey: unknown
}

export {
  OptionRecord,
  DefaultProps,
  OptionValueDictionary,
  ObjValTypeMap,
  DefaultPropsBuilder,
}

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { SampleT } from '../../../sample/sample'

type s_DefaultProps = DefaultProps<SampleT>
