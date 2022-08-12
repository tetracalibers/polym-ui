export class PropWithDefault<T> {
  private _default: T | undefined

  constructor(defauV: T | undefined = undefined) {
    this._default = defauV
  }

  get default(): T {
    return this._default!
  }
}
