import List from '../object/List'

export default class IO {
  private fs = require('fs')
  private list = new List()

  /* unit:: T => IO[T] */
  unit = (any?: any) => {
    return (_: void) => {
      // 外界は明示する必要はありません
      return any
    }
  }

  /* flatMap:: IO[T] => FUN[T => IO[U]] => IO[U] */
  flatMap = instanceA => {
    return actionAB => {
      // actionAB:: a -> IO[b]
      return this.unit(this.run(actionAB(this.run(instanceA))))
    }
  }

  /* done:: T => IO[T] */
  done = (_any: void) => {
    return this.unit()
  }

  /* run:: IO[A] => A */
  run = instanceM => {
    return instanceM()
  }

  /* readFile:: STRING => IO[STRING] */
  readFile = path => {
    return _ => {
      var content = this.fs.readFileSync(path, 'utf8')
      return this.unit(content)(_)
    }
  }

  /* println:: STRING => IO[null] */
  println = message => {
    return _ => {
      console.log(message)
      return this.unit(null)(_)
    }
  }

  writeFile = path => {
    return content => {
      return _ => {
        this.fs.writeFileSync(path, content)
        return this.unit(null)(_)
      }
    }
  }

  /* IO.seq:: IO[a] => IO[b] => IO[b] */
  seq = instanceA => {
    return instanceB => {
      return this.flatMap(instanceA)(_a => {
        return instanceB
      })
    }
  }

  seqs = alist => {
    var self = this
    return alist.match({
      empty: () => {
        return self.done()
      },
      cons: (head, tail) => {
        return self.flatMap(head)(_ => {
          return self.seqs(tail)
        })
      },
    })
  }

  /* IO.putc:: CHAR => IO[] */
  putc = character => {
    return _io => {
      process.stdout.write(character)
      return null
    }
  }

  /* IO.puts:: LIST[CHAR] => IO[] */
  puts = alist => {
    return this.list.match(alist, {
      empty: () => {
        return this.done()
      },
      cons: (head, tail) => {
        return this.seq(this.putc(head))(this.puts(tail))
      },
    })
  }

  /* IO.getc :: IO[CHAR] */
  getc = () => {
    var continuation = () => {
      var chunk = process.stdin.read()
      return chunk
    }
    process.stdin.setEncoding('utf8')
    return process.stdin.on('readable', continuation)
  }
}
