import Pair from '../object/Pair'
import List from '../object/List'

export default class WRITER {
  private pair = new Pair()
  private list = new List()

  unit = a => {
    return {
      run: _ => {
        return this.pair.cons(this.list.empty(), a)
      },
    }
  }

  flatMap = writer => {
    var writerPair = writer.run()
    var v = this.pair.left(writerPair)
    var a = this.pair.right(writerPair)
    return f => {
      // transform:: a -> a
      var newPair = f(a).run()
      var v_ = this.pair.left(newPair)
      var b = this.pair.right(newPair)
      return {
        run: () => {
          return this.pair.cons(this.list.append(v)(v_), b)
        },
      }
    }
  }

  tell = s => {
    return {
      run: _ => {
        return this.pair.cons(s, this.list.empty())
      },
    }
  }
}
