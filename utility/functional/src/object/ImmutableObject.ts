export default class ImmObject {
  /* empty:: STRING => Any */
  empty = _ => {
    return null
  }

  set = (key, value) => {
    return obj => {
      return queryKey => {
        return key === queryKey ? value : this.get(queryKey)(obj)
      }
    }
  }

  get = key => {
    return obj => {
      return obj(key)
    }
  }
}
