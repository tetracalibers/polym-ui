import Maybe from '../object/Maybe'

export default class MAYBE_MONAD extends Maybe {
  /* unit:: T => MAYBE[T] */
  unit = value => {
    return this.just(value)
  }

  /* flatMap:: MAYBE[T] => FUN[T => MAYBE[U]] => MAYBE[U] */
  flatMap = instanceM => {
    return transform => {
      return this.match(instanceM, {
        /* 正常な値の場合は、transform関数を計算する */
        just: value => {
          return transform(value)
        },
        /* エラーの場合は、何もしない */
        nothing: (_: void) => {
          return this.nothing()
        },
      })
    }
  }

  /* ヘルパー関数  */
  getOrElse = instanceM => {
    return alternate => {
      return this.match(instanceM, {
        just: value => {
          return value
        },
        nothing: _ => {
          return alternate
        },
      })
    }
  }
}
