import RecursiveObject from '../object/RecursiveObject'

export default class MAYBE_MONAD extends RecursiveObject {
  just = value => {
    return pattern => {
      return pattern.just(value)
    }
  }

  nothing = (_: void) => {
    return pattern => {
      return pattern.nothing(_)
    }
  }

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

  map = maybeInstance => {
    return transform => {
      return this.match(maybeInstance, {
        nothing: _ => {
          return this.nothing(_)
        },
        just: value => {
          return this.just(transform(value))
        },
      })
    }
  }

  liftM = f => {
    return ma => {
      return this.flatMap(ma)(x => {
        return this.unit(f(x))
      })
    }
  }

  apply = mf => {
    return ma => {
      return this.flatMap(mf)(f => {
        return this.flatMap(ma)(a => {
          return this.unit(f(a))
        })
      })
    }
  }

  get = maybe => {
    return this.getOrElse(maybe)(null)
  }

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

  isEqual = maybeA => {
    return maybeB => {
      return this.match(maybeA, {
        just: valueA => {
          return this.match(maybeB, {
            just: valueB => {
              return valueA === valueB
            },
            nothing: _ => {
              return false
            },
          })
        },
        nothing: _ => {
          return this.match(maybeB, {
            just: _ => {
              return false
            },
            nothing: _ => {
              return true
            },
          })
        },
      })
    }
  }
}
