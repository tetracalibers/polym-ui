import RecursiveObject from '../object/RecursiveObject'

export default class EITHER extends RecursiveObject {
  left = value => {
    return pattern => {
      return pattern.left(value)
    }
  }

  right = value => {
    return pattern => {
      return pattern.right(value)
    }
  }

  unit = value => {
    return this.right(value)
  }

  flatMap = instanceM => {
    return transform => {
      return this.match(instanceM, {
        right: value => {
          return transform(value)
        },
        left: value => {
          return this.left(value)
        },
      })
    }
  }

  map = instanceM => {
    return transform => {
      return this.match(instanceM, {
        right: value => {
          return this.right(transform(value))
        },
        left: value => {
          return this.left(value)
        },
      })
    }
  }
}
