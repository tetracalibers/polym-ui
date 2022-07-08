import Pair from '../object/Pair'

export default class IO_MONAD_HAS_OUTSIDE {
  private pair: Pair

  /* unit:: T => IO[T] */
  unit = (any?: any) => {
    return world => {
      // worldは現在の外界
      return this.pair.cons(any, world)
    }
  }

  /* flatMap:: IO[T] => FUN[T => IO[U]] => IO[U] */
  flatMap = instanceA => {
    return actionAB => {
      // actionAB:: FUN[T => IO[U]]
      return world => {
        var newPair = instanceA(world) // 現在の外界のなかで instanceAのIOアクションを実行する
        return this.pair.match(newPair, {
          cons: (value, newWorld) => {
            return actionAB(value)(newWorld) // 新しい外界のなかで、actionAB(value)で作られたIOアクションを実行する
          },
        })
      }
    }
  }

  /* done:: T => IO[T] */
  done = (_any: void) => {
    return this.unit()
  }

  /* run:: IO[A] => A */
  run = instance => {
    return world => {
      var newPair = instance(world) // IOモナドのインスタンス(アクション)を現在の外界に適用する
      return this.pair.left(newPair) // 結果だけを返す
    }
  }

  println = message => {
    return world => {
      // IOモナドを返す
      console.log(message)
      return this.unit(null)(world)
    }
  }
}
