import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'

const conf = {}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
