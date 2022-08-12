export namespace Num {
  export namespace Peano {
    export type Get<
      TLength extends number = 40,
      TList extends any[] = []
    > = TList['length'] extends TLength
      ? TLength
      : TList['length'] | Get<TLength, [[], ...TList]>

    export type ToStr = {
      [K in Get]: `${K}`
    }

    export type FromStr = {
      [Property in keyof ToStr as `${Property}`]: Property
    }
  }

  export namespace To {
    export type String<T extends string | number | bigint> =
      T extends `0${infer L}` ? String<L> : `${T}`
  }
}
