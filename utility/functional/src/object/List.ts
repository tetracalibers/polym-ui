import RecursiveObject from './RecursiveObject'
import F from '../utility/FunctionalUtility'

export default class List extends RecursiveObject {
  empty = (_?: any) => {
    return pattern => {
      return pattern.empty()
    }
  }

  cons = (value, alist) => {
    return pattern => {
      return pattern.cons(value, alist)
    }
  }

  /**
   * 空のリストかどうか判定
   * @module isEmpty
   */
  isEmpty = alist => {
    return this.match(alist, {
      empty: _ => {
        return true
      },
      cons: (_head, _tail) => {
        return false
      },
    })
  }

  find = alist => {
    return predicate => {
      // 要素を判定する述語関数
      return this.foldr(alist)(null)(item => {
        // foldrを利用する
        return accumulator => {
          /* 要素が見つかった場合、その要素を返す */
          if (predicate(item) === true) {
            return item
          } else {
            return accumulator
          }
        }
      })
    }
  }

  /**
   * リストの先頭要素を取得
   * @module head
   */
  head = alist => {
    return this.match(alist, {
      empty: _ => {
        return undefined
      },
      cons: (head, _tail) => {
        return head
      },
    })
  }

  /**
   * リストの後尾のリストを取得
   * @module tail
   */
  tail = alist => {
    return this.match(alist, {
      empty: _ => {
        return undefined
      },
      cons: (_head, tail) => {
        return tail
      },
    })
  }

  /**
   * リストを配列に変換
   * @module toArray
   */
  toArray = alist => {
    var toArrayAux = (alist, accumulator) => {
      return this.match(alist, {
        empty: _ => {
          return accumulator
        },
        cons: (head, tail) => {
          return toArrayAux(tail, accumulator.concat(head))
        },
      })
    }
    return toArrayAux(alist, [])
  }

  fromArray = array => {
    return array.reduce((accumulator, item) => {
      return this.append(accumulator)(this.cons(item, this.empty()))
    }, this.empty())
  }

  /**
   * リストの長さを取得
   * @module length
   */
  length = alist => {
    return this.foldr(alist)(0)(_item => {
      return accumulator => {
        return accumulator + 1
      }
    })
  }

  /**
   * 2つのリストを連結
   * @module append
   */
  /* append:: LIST[T] -> LIST[T] -> LIST[T] */
  append = xs => {
    return ys => {
      return this.match(xs, {
        empty: _ => {
          return ys
        },
        cons: (head, tail) => {
          return this.cons(head, this.append(tail)(ys))
        },
      })
    }
  }

  /* concat:: LIST[LIST[T]] -> LIST[T] */
  concat = xss => {
    return this.foldr(xss)(this.empty())(this.append)
  }

  join = xss => {
    return this.concat(xss)
  }

  flatten = instanceMM => {
    return this.concat(instanceMM)
  }

  /**
   * リストの要素を逆転
   * @module reverse
   */
  reverse = alist => {
    return this.foldr(alist)(this.empty(0))(item => {
      return accumulator => {
        return this.append(accumulator)(this.cons(item, this.empty()))
      }
    })
  }

  last = alist => {
    return F.compose(this.head, this.reverse)(alist)
  }

  /* map:: LIST[T] -> FUN[T->U] -> LIST[U] */
  map = instanceM => {
    return transform => {
      return this.match(instanceM, {
        empty: _ => {
          return this.empty()
        },
        cons: (head, tail) => {
          return this.cons(transform(head), this.map(tail)(transform))
        },
      })
    }
  }

  init = alist => {
    return F.compose(this.reverse, F.compose(this.tail, this.reverse))(alist)
  }

  and = alist => {
    return this.match(alist, {
      empty: _ => {
        return true
      },
      cons: (head, tail) => {
        return head && this.and(tail)
      },
    })
  }

  or = alist => {
    return this.match(alist, {
      empty: _ => {
        return false
      },
      cons: (head, tail) => {
        return head || this.or(tail)
      },
    })
  }

  all = alist => {
    return this.foldr(alist)(true)(item => {
      return accumulator => {
        return accumulator && item
      }
    })
  }

  any = alist => {
    return this.foldr(alist)(false)(item => {
      return accumulator => {
        return accumulator || item
      }
    })
  }

  none = predicate => {
    return alist => {
      return F.compose(this.and, F.flip(this.map)(F.not(predicate)))(alist)
    }
  }

  sum = alist => {
    return this.foldr(alist)(0)(item => {
      return accumulator => {
        return accumulator + item
      }
    })
  }

  product = alist => {
    return this.foldr(alist)(1)(item => {
      return accumulator => {
        return accumulator * item
      }
    })
  }

  /**
   * リストの畳み込み関数
   */
  /* foldr:: LIST[T] -> T -> FUN[T -> U -> U] -> T */
  foldr = alist => {
    // alist:: LIST[T]
    return accumulator => {
      // accumulator:: T
      return glue => {
        // glue:: FUN[T -> U -> U]
        return this.match(alist, {
          empty: _ => {
            return accumulator
          },
          cons: (head, tail) => {
            return glue(head)(this.foldr(tail)(accumulator)(glue))
          },
        })
      }
    }
  }
}
