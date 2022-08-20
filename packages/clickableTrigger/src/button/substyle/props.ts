import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'

const conf = {
  padding: NotRequired<CSST.Property.Padding>('.5rem 1rem'),
  borderRadius: NotRequired<CSST.Property.BorderRadius>('1rem'),
}
type Conf = typeof conf

export type ButtonSubstyleProps = getPropType<Conf>
export const substyleDefaultProps = getDefaultProps<ButtonSubstyleProps>(conf)
