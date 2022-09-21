// 見えるようにスクロールしてfocus
export const useScrollToViewFocus = () => {
  // メニュー内に表示されているかどうか
  const isHidden = (el: HTMLElement) => el.offsetParent === null

  // 表示されていなかったらスクロール
  const scrollFocus = (newOptionE: HTMLElement) => {
    // オプションがメニュー内に表示されていない場合
    if (isHidden(newOptionE)) {
      if (newOptionE.parentElement) {
        // その位置をメニュー内に設定して表示されるようにする
        newOptionE.parentElement.scrollTop =
          newOptionE.parentElement.scrollTop + newOptionE.offsetTop
      }
    }
    newOptionE.focus()
  }

  return scrollFocus
}
