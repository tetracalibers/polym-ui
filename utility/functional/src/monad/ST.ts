import Pair from '../object/Pair'

export default class ST {
  private pair = new Pair()

  unit = value => {
    return state => {
      return this.pair.cons(value, state)
    }
  }

  flatMap = instanceM => {
    // instanceM:: ST a
    return f => {
      // f:: a -> ST b
      return state => {
        var newState = this.app(instanceM)(state) // instanceM(state)
        return newState.match({
          cons: (x, state_) => {
            return this.app(f(x))(state_)
          },
        })
      }
    }
  }

  app = st => {
    return state => {
      return st(state)
    }
  }

  get = (_: void) => {
    return state => {
      return this.pair.cons(state, state)
    }
  }

  put = newState => {
    return _state => {
      return this.pair.cons(this.pair.empty(), newState)
    }
  }
}
