import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'

type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = []
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>

type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never
> = START_ARR['length'] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>

export type BlurRadiusRange = NumericRange<CreateArrayWithLengthX<1>, 20>
export const blurRadiusRange = [...new Array(20)].map((_, idx) => idx + 1)

const conf = {
  animationDuration: Required<CSST.Property.AnimationDuration>('1s'),
  blurRadius: Required<BlurRadiusRange>(10),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
