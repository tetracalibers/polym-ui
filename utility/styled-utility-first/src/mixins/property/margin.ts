import 'styled-utility-first/PUT'

export const clear = ['margin-top: 0;', 'margin-bottom: 0;'] as const
type Clear = typeof clear

declare module 'styled-utility-first/PUT' {
  export namespace margin {
    export namespace vertical {
      const clear: Clear
    }
  }
}
