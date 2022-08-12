export namespace P {
  export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
    T
  >() => T extends Y ? 1 : 2
    ? true
    : false

  export type If<C extends true | false, T, F> = C extends true ? T : F
}
