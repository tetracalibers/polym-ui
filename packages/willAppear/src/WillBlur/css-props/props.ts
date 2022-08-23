import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import {
  CreateArrayWithLengthX,
  NumericRange,
} from '../../common/utility/NumericRange'

export type BlurRadiusRange = NumericRange<CreateArrayWithLengthX<1>, 20>
export const blurRadiusRange = [...new Array(20)].map((_, idx) => idx + 1)

const conf = {
  animationDuration: Required<number>(1),
  blurRadius: Required<BlurRadiusRange>(10),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
