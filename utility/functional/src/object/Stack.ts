import ST from '../monad/ST'
import List from './List'

export default class Stack {
  private ST = new ST()
  private list = new List()

  pop = _ => {
    return this.ST.flatMap(this.ST.get())(alist => {
      return this.list.match(alist, {
        cons: (x, xs) => {
          return this.ST.flatMap(this.ST.put(xs))(_ => {
            return this.ST.unit(x)
          })
        },
      })
    })
  }

  push = x => {
    return this.ST.flatMap(this.ST.get())(xs => {
      return this.ST.put(this.list.cons(x, xs))
    })
  }
}
