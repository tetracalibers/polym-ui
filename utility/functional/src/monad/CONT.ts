export default class CONT {
  unit = a => {
    return k => {
      return k(a)
    }
  }

  flatMap = m => {
    return f => {
      // f:: a -> Cont r a
      return k => {
        return m(a => {
          return f(a)(k)
        })
      }
    }
  }

  callCC = f => {
    return k => {
      return f(a => {
        return _ => {
          return k(a)
        }
      })(k)
    }
  }
}
