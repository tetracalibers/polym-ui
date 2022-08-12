import { OptionRecord, ObjValTypeMap } from '../../types/api/getDefaultProps'
import _ from 'lodash'

export const getDefaultProps = <T>(options: OptionRecord) => {
  type Opt = typeof options
  type OptKey = keyof Opt
  type OptVal = ObjValTypeMap<Opt>

  const defaults = _.mapValues(
    options as Opt,
    (v: OptVal) => v.default as OptVal[OptKey]
  ) as unknown
  return defaults as T
}

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { sampleP, SampleT } from '../../sample/sample'
import { getPropType } from '../..'

type PropType = getPropType<SampleT>
const defaults = getDefaultProps<PropType>(sampleP)

const s_component = (props: PropType = defaults) => {
  console.log(props)
}
//s_component()
