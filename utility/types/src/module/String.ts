import { Num } from './Number'

export namespace String {
  export type Split<
    S extends string,
    SEP extends string,
    Flag = false
  > = string extends S
    ? string[]
    : S extends ''
    ? Flag extends false
      ? SEP extends ''
        ? []
        : ['']
      : []
    : S extends `${infer Before}${SEP}${infer After}`
    ? [Before, ...Split<After, SEP, true>]
    : [S]

  export namespace To {
    export type Number<S extends string> = S extends keyof Num.Peano.FromStr
      ? Num.Peano.FromStr[S]
      : never
  }
}
