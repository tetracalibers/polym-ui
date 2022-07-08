export default class READER {
  unit = a => {
    return {
      run: _ => {
        // runReader :: Reader r a -> r -> a
        return a
      },
    }
  }

  flatMap = reader => {
    return f => {
      // transform:: a -> a
      return {
        run: env => {
          return f(reader.run(env)).run(env)
        },
      }
    }
  }

  ask = {
    run: env => {
      return env
    },
  }

  local = f => {
    return reader => {
      return {
        run: env => {
          return reader.run(f(env))
        },
      }
    }
  }
}
