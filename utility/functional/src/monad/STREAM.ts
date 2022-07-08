import Stream from '../object/Stream'
import MAYBE from './MAYBE'

export default class STREAM extends Stream {
  private Maybe: MAYBE = new MAYBE()

  /* unit:: ANY -> STREAM */
  unit = value => {
    if (value != null) {
      return this.cons(value, _ => {
        return this.empty()
      })
    } else {
      return this.empty()
    }
  }

  /* head:: STREAM -> MAYBE[STREAM] */
  head = lazyList => {
    return this.match(lazyList, {
      empty: _ => {
        return this.Maybe.nothing()
      },
      cons: (value, _tailThunk) => {
        return this.Maybe.just(value)
      },
    })
  }

  /* flatMap:: STREAM[T] -> FUNC[T->STREAM[T]] -> STREAM[T] */
  flatMap = lazyList => {
    return transform => {
      return this.flatten(this.map(lazyList)(transform))
    }
  }

  /* tail:: STREAM -> MAYBE[STREAM] */
  tail = lazyList => {
    return this.match(lazyList, {
      empty: _ => {
        return this.Maybe.nothing()
      },
      cons: (_head, tailThunk) => {
        return this.Maybe.just(tailThunk())
      },
    })
  }
}
