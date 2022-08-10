export namespace ByType {
  export type Omit<T, U> = {
    [k in keyof T as T[k] extends U ? never : k]: T[k]
  }

  export type Pick<T, U> = {
    [k in keyof T as T[k] extends U ? k : never]: T[k]
  }
}
