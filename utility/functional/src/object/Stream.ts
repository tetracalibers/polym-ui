import RecursiveObject from './RecursiveObject'
import F from '../utility/FunctionalUtility'

export default class Stream extends RecursiveObject {
  empty = (_: void) => {
    return pattern => {
      return pattern.empty()
    }
  }

  cons = (head, tailThunk) => {
    return pattern => {
      return pattern.cons(head, tailThunk)
    }
  }

  /* head:: STREAM[T] => T */
  head = lazyList => {
    return this.match(lazyList, {
      empty: _ => {
        return null
      },
      cons: (value, _) => {
        return value
      },
    })
  }

  /* tail:: STREAM[T] => STREAM[T] */
  tail = lazyList => {
    return this.match(lazyList, {
      empty: _ => {
        return null
      },
      cons: (_, tailThunk) => {
        return tailThunk()
      },
    })
  }

  toArray = lazyList => {
    return this.match(lazyList, {
      empty: _ => {
        return []
      },
      cons: (head, tailThunk) => {
        return this.match(tailThunk(), {
          empty: _ => {
            return [head]
          },
          cons: (_head, _tailThunk_) => {
            return [head].concat(this.toArray(tailThunk()))
          },
        })
      },
    })
  }

  /**
   * ストリームの先頭からn個の要素を取り出す
   * @module take
   */
  /* take:: (STREAM[T], NUM) => LIST[T] */
  take = lazyList => {
    return number => {
      return this.match(lazyList, {
        empty: _ => {
          return this.empty()
        },
        cons: (head, tailThunk) => {
          if (number === 0) {
            return this.empty()
          } else {
            return this.cons(head, _ => {
              return this.take(tailThunk())(number - 1)
            })
          }
        },
      })
    }
  }

  /**
   * ストリームを生成する
   * @module iterate
   * @param {number} init - 先頭の値
   * @param {function} step - 次の値との差を計算する関数
   */
  iterate = (init: number): Function => {
    return (step: Function) => {
      return [
        init,
        (_: void) => {
          return this.iterate(step(init))(step)
        },
      ]
    }
  }

  generate = astream => {
    var theStream = astream
    return _ => {
      return this.match(theStream, {
        empty: _ => {
          return null
        },
        cons: (head, tailThunk) => {
          theStream = tailThunk()
          return head
        },
      })
    }
  }
  /**
   * ある整数から始まる無限の整数列を得る
   * @module enumFrom
   */
  enumFrom = from => {
    return this.cons(from, _ => {
      return this.enumFrom(from + 1)
    })
  }

  /**
   * 条件に合致した要素だけをストリームに残す
   * @module filter
   * @param {Function} predicate - 条件となる関数
   */
  /* filter:: FUN[T => BOOL] => STREAM[T] => STREAM[T] */
  filter = predicate => {
    return aStream => {
      return this.match(aStream, {
        empty: _ => {
          return this.empty()
        },
        cons: (head, tailThunk) => {
          if (predicate(head)) {
            // 条件に合致する場合
            return this.cons(head, _ => {
              return this.filter(predicate)(tailThunk())
            })
          } else {
            // 条件に合致しない場合
            return this.filter(predicate)(tailThunk())
          }
        },
      })
    }
  }

  remove = predicate => {
    return aStream => {
      return this.filter(F.not(predicate))(aStream)
    }
  }

  /**
   * ストリームのn番目の要素を返す
   * @module elemAt
   */
  elemAt = (n: number): Function => {
    return (aStream: Stream): number => {
      return n === 1 ? aStream[0] : this.elemAt(n - 1)(aStream[1]())
    }
  }

  /**
   * ストリームの各要素に対して処理を実行する
   * @module map
   */
  map = (transform: Function): Function => {
    return (aStream: Stream) => {
      const head = aStream[0]
      return [
        transform(head),
        (_: void) => {
          return this.map(transform)(aStream[1]())
        },
      ]
    }
  }

  /**
   * ストリームの全ての要素がtrueであるかを判定
   * @module all
   */
  all = (aStream: Stream): Function => {
    const allHelper = (aStream: Stream, accumulator: any): any => {
      const head = aStream[0]
      const newAccumulator = accumulator && head
      return aStream[1]() === null
        ? newAccumulator
        : allHelper(aStream[1](), newAccumulator)
    }
    return allHelper(aStream, true)
  }

  private continuesOnSuccess = F.identity

  private continuesOnFailure = (aStream, predicate) => {
    /* find関数を再帰的に呼び出す */
    return this.find(aStream, predicate)
  }

  find = (aStream, predicate) => {
    return this.match(aStream, {
      /* リストの最末尾に到着した場合
                           成功継続で反復処理を抜ける */
      empty: () => {
        return this.continuesOnSuccess(null)
      },
      cons: (head, tailThunk) => {
        /* 目的の要素を見つけた場合
                             成功継続で反復処理を脱出する */
        if (predicate(head) === true) {
          return this.continuesOnSuccess(head)
        } else {
          /* 目的の要素を見つけられなった場合、
                               失敗継続で次の反復処理を続ける */
          return this.continuesOnFailure(tailThunk(), predicate)
        }
      },
    })
  }
}
