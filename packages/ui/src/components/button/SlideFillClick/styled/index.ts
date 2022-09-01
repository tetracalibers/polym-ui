import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'
import { CannotIncludeInteractiveElements } from '../../../../css/alert'
import { Button } from '../../../core/Button'
import { Anchor } from '../../../core/Anchor'

const clickareaStyle = css`
  /*線の基点とするためrelativeを指定*/
  position: relative;
  /*ボタンの形状*/
  display: inline-block;
  padding: 10px 30px;

  color: #333;
  border: 1px solid #ccc;
  text-decoration: none;
  outline: none;
  /*はみ出す背景色を隠す*/
  overflow: hidden;

  &:hover {
    color: #ccc;
    border-color: transparent;
    /*色の変化を遅らせる*/
    transition-delay: 0.6s;
  }

  /*背景の設定*/
  &::before {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    /*背景の形状*/
    height: 100%;
    width: 100%;
    background: #333;
    /*アニメーションの設定*/
    transition: all 0.3s;
    transform: scale(0, 1);
    transform-origin: center;
  }

  /*hoverをすると背景が伸びる*/
  &:hover::before {
    width: 100%;
    /*0.4秒遅れてアニメーション*/
    transition-delay: 0.4s;
    transform: scale(1, 1);
  }
`

export const STyledButton = styled(Button)`
  ${ResetCss.button}
  ${clickareaStyle}
`

export const STyledAnchor = styled(Anchor)`
  ${clickareaStyle}
`

export const ChildrenWrapper = styled.span`
  && {
    display: block;
    z-index: 2;
  }

  /*線の設定*/
  &&::before,
  &&::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    /*線の形状*/
    width: 100%;
    height: 1px;
    background: #333;
    /*アニメーションの設定*/
    transition: all 0.3s;
    transform: scale(0, 1);
    transform-origin: center;
  }

  /*上線*/
  &&::before {
    left: 0;
    top: 0;
  }

  /*下線*/
  &&::after {
    left: 0;
    bottom: 0;
  }

  /*hoverをすると線が伸びる*/
  ${STyledAnchor}:hover &&::before,
  ${STyledAnchor}:hover &&::after,
  ${STyledButton}:hover &&::before,
  ${STyledButton}:hover &&::after {
    transform: scale(1, 1);
  }
`
