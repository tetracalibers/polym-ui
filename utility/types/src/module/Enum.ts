export namespace Enum {
  export type Enum<
    T extends readonly string[],
    N extends boolean = false,
    R extends object = {}
  > = T extends readonly [
    ...infer Rest extends string[],
    infer Last extends string
  ]
    ? Enum<
        Rest,
        N,
        {
          readonly [key in keyof R | Last as key extends keyof R
            ? key
            : Capitalize<Last>]: key extends keyof R
            ? R[key]
            : N extends false
            ? Last
            : Rest['length']
        }
      >
    : R
}
