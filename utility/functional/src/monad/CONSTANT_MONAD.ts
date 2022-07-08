export default class ID {
  /* unit:: T => ID[T] */
  unit = value => {
    // 単なる identity関数と同じ
    return value
  }

  /* flatMap:: ID[T] => FUN[T => ID[T]] => ID[T] */
  flatMap = instanceM => {
    return transform => {
      return transform(instanceM) // 単なる関数適用と同じ
    }
  }

  compose = (f, g) => {
    return x => {
      return this.flatMap(f(x))(g)
    }
  }
}
