import IO_MONAD_NO_OUTSIDE from './IO_MONAD_NO_OUTSIDE'
import IO_MONAD_HAS_OUTSIDE from './IO_MONAD_HAS_OUTSIDE'
import List from '../object/List'

export default class IO {
  private IO: any
  private list: List = new List()

  constructor(outside?: any) {
    this.IO = outside ? IO_MONAD_HAS_OUTSIDE : IO_MONAD_NO_OUTSIDE
  }

  /* IO.seq:: IO[a] => IO[b] => IO[b] */
  seq = instanceA => {
    return instanceB => {
      return this.IO.flatMap(instanceA)(_a => {
        return instanceB
      })
    }
  }

  seqs = alist => {
    return this.list.foldr(alist)(this.list.empty())(this.IO.done())
  }

  /* IO.putc:: CHAR => IO[] */
  putc = character => {
    return _ => {
      process.stdout.write(character)
      return null
    }
  }

  /* IO.puts:: LIST[CHAR] => IO[] */
  puts = alist => {
    return this.list.match(alist, {
      empty: () => {
        return this.IO.done()
      },
      cons: (head, tail) => {
        return this.seq(this.putc(head))(this.puts(tail))
      },
    })
  }

  /* IO.getc:: IO[CHAR] */
  getc = () => {
    var continuation = () => {
      var chunk = process.stdin.read()
      return chunk
    }
    process.stdin.setEncoding('utf8')
    return process.stdin.on('readable', continuation)
  }
}
