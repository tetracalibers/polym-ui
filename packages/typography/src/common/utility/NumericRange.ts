export type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = []
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>

export type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never
> = START_ARR['length'] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>

/* -------------------------------------------- */

type MAXIMUM_ALLOWED_BOUNDARY = 999

type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>

export const ComputeRange = (N: number, Result: number[] = []): number[] => {
  if (Result.length === N) {
    return Result
  }
  return ComputeRange(N, [...Result, Result.length])
}
// 0 , 1, 2 ... 998
type NumberRange = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]
