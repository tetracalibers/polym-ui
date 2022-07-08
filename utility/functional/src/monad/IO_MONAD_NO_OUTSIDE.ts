export default class IO_MONAD_NO_OUTSIDE {
  /* unit:: T => IO[T] */
  unit = (any?: any) => {
    return (_: void) => {
      // 外界を明示する必要はない
      return any
    }
  }

  /* flatMap:: IO[T] => FUN[T => IO[U]] => IO[U] */
  flatMap = instanceA => {
    return actionAB => {
      // actionAB:: a -> IO[b]
      return _ => {
        return this.run(actionAB(this.run(instanceA)))
      }
    }
  }

  /* done:: T => IO[T] */
  done = (_any: void) => {
    return this.unit()
  }

  /* run:: IO[A] => A */
  run = instance => {
    return instance()
  }

  /* readFile:: STRING => IO[STRING] */
  readFile = path => {
    return _ => {
      var fs = require('fs')
      var content = fs.readFileSync(path, 'utf8')
      return this.unit(content)()
    }
  }

  /* println:: STRING => IO[null] */
  println = message => {
    return _ => {
      console.log(message)
      return this.unit(null)()
    }
  }

  writeFile = path => {
    return content => {
      return _ => {
        var fs = require('fs')
        fs.writeFileSync(path, content)
        return this.unit(null)()
      }
    }
  }
}
