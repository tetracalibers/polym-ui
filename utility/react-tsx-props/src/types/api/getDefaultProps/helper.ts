import { OptionRecord } from '../../base'
import { ObjValTypeMap } from '../../ObjValueUnionBuilder'

export type OptionValuePicker<
  I,
  O extends OptionRecord = OptionRecord
> = ObjValTypeMap<O, keyof O> extends infer MAP
  ? I extends keyof MAP
    ? MAP[I]
    : never
  : never
