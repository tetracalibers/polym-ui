import { OptionRecord, OptionValueDictionary } from '../../base'
import { ObjValTypeMap } from '../../ObjValueUnionBuilder'

type DefaultProps<O extends OptionRecord = OptionRecord> = {
  [k in keyof O]: {
    default: O[k]
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
