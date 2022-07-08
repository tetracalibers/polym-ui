import RecursiveObject from './RecursiveObject'
import Pair from './Pair'
import ST from '../monad/ST'

export default class Tree extends RecursiveObject {
  private pair = new Pair()
  private ST = new ST()

  leaf = value => {
    return pattern => {
      return pattern.leaf(value)
    }
  }

  node = (left, right) => {
    return pattern => {
      return pattern.node(left, right)
    }
  }

  toArray = tree => {
    return this.match(tree, {
      leaf: value => {
        return value
      },
      node: (left, right) => {
        return [this.toArray(left), this.toArray(right)]
      },
    })
  }

  map = f => {
    return tree => {
      return this.match(tree, {
        leaf: value => {
          return this.leaf(f(value))
        },
        node: (left, right) => {
          return this.node(this.map(f)(left), this.map(f)(right))
        },
      })
    }
  }

  rlabel = (tree, state) => {
    return this.match(tree, {
      leaf: _value => {
        return this.pair.cons(this.leaf(state), state + 1)
      },
      node: (left, right) => {
        var leftNode = this.rlabel(left, state)
        var rightNode = this.rlabel(right, this.pair.right(leftNode))
        return this.pair.cons(
          this.node(this.pair.left(leftNode), this.pair.left(rightNode)),
          this.pair.right(rightNode)
        )
      },
    })
  }

  fresh = state => {
    return this.pair.cons(state, state + 1)
  }

  mlabel = tree => {
    return this.match(tree, {
      leaf: _ => {
        return this.ST.flatMap(this.fresh)(n => {
          return this.ST.unit(this.leaf(n))
        })
      },
      node: (left, right) => {
        return this.ST.flatMap(this.mlabel(left))(left_ => {
          return this.ST.flatMap(this.mlabel(right))(right_ => {
            return this.ST.unit(this.node(left_, right_))
          })
        })
      },
    })
  }
}
