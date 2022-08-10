export namespace CssStyle {
  export namespace Unit {
    export type Length =
      | 'px'
      | 'em'
      | 'ex'
      | 'ch'
      | 'rem'
      | 'vw'
      | 'vh'
      | 'vmin'
      | 'vmax'
      | '%'
  }

  export namespace Prop {
    export namespace Value {
      export type Space = number | `${number}${Unit.Length}`
    }
  }
}
