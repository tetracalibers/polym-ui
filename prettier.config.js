module.exports = {
  // 折り返す行の長さ
  printWidth: 100,
  // インデントのスペース数
  tabWidth: 2,
  // スペースではなくタブで行をインデント
  useTabs: false,
  // ステートメントの最後にセミコロンを追加
  semi: false,
  // ダブルクォートの代わりにシングルクォートを使用
  singleQuote: true,
  // オブジェクトのプロパティが引用されるときに変更
  /**
   * as-needed : 必要な場合にのみ、オブジェクトプロパティを引用符で囲む(デフォルト)
   * consistent: オブジェクトの少なくとも1つのプロパティに引用符が必要な場合は、すべてのプロパティを引用符で囲む
   * preserve : 入力された引用符を尊重する
   */
  quoteProps: 'consistent',
  // JSXでダブルクォートの代わりにシングルクォートを使用
  jsxSingleQuote: true,
  // JSX要素を複数行で記述するとき、要素の閉じタグ > を最後の行に含んで表示するかどうか
  jsxBracketSameLine: false,
  // 末尾のカンマの設定
  /**
   * es5 : ES5で有効な末尾のカンマ(オブジェクト、配列など)
   * none : 末尾にカンマをつけない(デフォルト)
   * all : 可能な限り末尾にカンマを付ける(関数の引数含む)
   */
  trailingComma: 'es5',
  // オブジェクトリテラルの角かっこの内側にスペースを入れる
  bracketSpacing: true,
  // 複数行の要素の最終行の最後に「>」を置く。falseは次の行に置く。
  bracketSameLine: false,
  // アロー関数の()が省略可能でも常に書く。
  /**
   * always : ()を常に書く
   * avoid : 省略可能なときは()を書かない(デフォルト)
   */
  arrowParens: 'avoid',
  // markdownの折返しの設定
  /**
   * always : Print Widthで指定した値を超える時は折り返す
   * never : 折り返さないしない
   * preserve : そのまま折り返す(デフォルト)
   */
  proseWrap: 'preserve',
  // HTMLファイルのグローバルな空白の感度を指定
  /**
   * css : displayプロパティのデフォルト値を尊重(デフォルト)
   * strict : 空白を区別する
   * ignore : 空白は区別しない
   */
  htmlWhitespaceSensitivity: 'strict',
  // 改行の文字コードを指定
  /**
   * lf : Linux、MacOS、gitリポジトリで一般的な、ラインフィード(\n)のみ
   * crlf : Windowsで一般的な、キャリッジリターン + ラインフィード文字(\r\n)
   * cr : キャリッジリターン文字(\r)のみ
   * auto : 既存の行末を維持(デフォルト)
   */
  endOfLine: 'lf',
  // rettierがファイルに埋め込まれた引用コードをフォーマットするかどうかを制御
  /**
   * off : 埋め込まれたコードを自動的にフォーマットしない
   * auto : Prettierが自動的に識別できる場合、埋め込みコードをフォーマットする(デフォルト)
   */
  embeddedLanguageFormatting: 'auto',
}
