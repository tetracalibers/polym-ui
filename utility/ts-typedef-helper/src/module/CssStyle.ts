export namespace CssStyle {
  export namespace Unit {
    export const length = [
      'px',
      'em',
      'ex',
      'ch',
      'rem',
      //'lh',
      //'rlh',
      'vw',
      'vh',
      'vmin',
      'vmax',
      'vb',
      'vi',
      'svw',
      'svh',
      'lvw',
      'lvh',
      'dvw',
      'dvh',
    ] as const
    export type Length = typeof length[number]
  }

  export namespace Prop {
    export namespace Value {
      export type Space = number | `${number}${Unit.Length}`
    }
  }
}
