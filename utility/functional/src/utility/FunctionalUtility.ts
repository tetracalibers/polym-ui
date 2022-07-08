export default class F {
  /**
   * 関数合成を行う
   * @module compose
   * @param {function} f - argに対して先に適用したい関数
   * @param {function} g - fの実行結果に対して適用したい関数
   * @param {any} arg - fに渡したい引数
   * @return {any} - f -> gの順番で実行した結果
   */
  static compose = (f: Function, g: Function) => (arg: unknown) => f(g(arg))

  /**
   * カリー化関数を引数の順番を変えて実行
   * @module flip
   * @param {function} func - 定義された引数の順序とは逆の順番で実行したい関数
   * @param {any} x - funcに最後に渡したい引数
   * @param {any} y - funcに最初に渡したい引数
   * @return {any} - func(y)(x)の実行結果
   */
  static flip = (func: Function) => (x: unknown) => (y: unknown) => func(y)(x)

  /**
   * 自分自身を返す関数
   * @module constant
   * @param {any} any - なんでも
   * @return {any} - 最初に渡した引数any
   */
  static constant = (any: any) => (_: never) => any

  /**
   * 恒等関数（引数をそのまま返す関数）
   * @module identity
   */
  static identity = (any: any) => any

  /**
   * 第一引数のみ返す関数
   * @module left
   */
  static left = (l: any, _: any) => l

  /**
   * カリー化関数の実行結果の論理を反転させる
   * @module not
   * @param {function} func - 実行結果の論理を反転させたい関数
   * @param {any} arg - funcに渡したい引数
   * @return {boolean} - !func(arg)
   */
  static not = (func: Function) => (arg: unknown) => !func(arg)

  /**
   * 関数適用の回数を数える
   */
  counter = init => {
    var _init = init // 可変な変数
    return _ => {
      _init = _init + 1 // 代入で変数_initを更新する
      return _init
    }
  }
}
