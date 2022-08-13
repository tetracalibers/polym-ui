const clear = ['margin-top: 0;', 'margin-bottom: 0;'] as const
type Clear = typeof clear

export namespace margin {
  export namespace vertical {
    export const clear = () => clear
  }
}

declare module 'styled-utility-first/PUT' {
  export namespace margin {
    export namespace vertical {
      export function clear(): Clear
    }
  }
}
