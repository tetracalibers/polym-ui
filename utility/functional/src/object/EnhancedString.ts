import List from './List'

export default class EString {
  private list: List = new List()

  /* 先頭文字を取得する */
  head = str => {
    return str[0]
  }

  /* 後尾文字列を取得する */
  tail = str => {
    return str.substring(1)
  }

  /* 空の文字列かどうかを判定する */
  isEmpty = str => {
    return str.length === 0
  }

  /* 文字列を文字のリストに変換する */
  toList = str => {
    if (this.isEmpty(str)) {
      return this.list.empty()
    } else {
      return this.list.cons(this.head(str), this.toList(this.tail(str)))
    }
  }
}
