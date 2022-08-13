export class PropTypeWrap<_T> {}

export type PropTypeWrapInstance<T> = ReturnType<
  (arg: { new (): PropTypeWrap<T> }) => PropTypeWrap<T>
>
