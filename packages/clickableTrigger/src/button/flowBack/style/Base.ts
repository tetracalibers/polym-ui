import styled from 'styled-components'

export const BaseStyled = styled.a`
  /* -------------------------------------------- */
  /* WRAPPER                                      */
  /* -------------------------------------------- */
  /* アニメーションの起点 */
  position: relative;
  overflow: hidden;
  /* ボタンの形状 */
  text-decoration: none;
  display: inline-block;
  /* ボーダー */
  border: 1px solid #555;
  padding: 10px 30px;
  text-align: center;
  outline: none;
  /* アニメーション設定 */
  transition: ease 0.2s;

  /* -------------------------------------------- */
  /* INNER                                        */
  /* -------------------------------------------- */
  & span {
    position: relative;
    /* 文字を背景より手前に表示 */
    z-index: 3;
    color: #333;
  }

  &:hover span {
    color: #fff;
  }
`
