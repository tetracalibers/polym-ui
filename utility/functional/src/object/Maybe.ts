import RecursiveObject from './RecursiveObject'

export default class Maybe extends RecursiveObject {
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
}
