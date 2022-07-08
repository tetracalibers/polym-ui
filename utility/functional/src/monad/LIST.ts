import List from '../object/List'

export default class LIST extends List {
  unit = value => {
    return this.cons(value, this.empty())
  }

  flatMap = instanceM => {
    return transform => {
      // FUN[T->LIST[T]]
      return this.join(this.map(instanceM)(transform))
    }
  }
}
