// eslint-disable-next-line no-redeclare

import _ from 'lodash'

export type Path = number[]

export const Path = {
  parent(path: Path): Path {
    return _.dropRight(path, 1)
  },

  next(path: Path): Path | null {
    const end = _.nth(path, -1)
    return end === undefined ? null : _.dropRight(path, 1).concat([end + 1])
  },

  previous(path: Path): Path | null {
    const end = _.nth(path, -1)
    return end === 0 || end === undefined
      ? null
      : _.dropRight(path, 1).concat([end - 1])
  },

  start(path: Path) {
    return _.nth(path, 0)
  },

  end(path: Path) {
    return _.nth(path, -1)
  },

  edges(path: Path) {
    return [this.start(path), this.end(path)]
  },

  equal(path1: Path, path2: Path) {
    return _.isEqual(path1, path2)
  },

  has(path1: Path, path2: Path): boolean {
    return Path.equal(_.dropRight(path1), path2)
  },
}
