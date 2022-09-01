import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'
import { CannotIncludeInteractiveElements } from '../../../../css/alert'
import { Button } from '../../../core/Button'
import { Anchor } from '../../../core/Anchor'

// 線 -> 背景 -> テキスト

const variables = css`
  /* effect ------------------------------------- */
  --animated-bg-color: ${$.grayScale.dark};
  --animated-color: ${$.grayScale.light};
  --animate-line-thickness: 1.5px;
  --duration: 0.4s;
  /* css ---------------------------------------- */
  --bd-color: ${$.pastel.purple};
  --bd-width: 1px;
  --paddingY: 1em;
  --paddingX: 2em;
`

const clickareaStyle = css`
  ${variables}

  /*線の基点とするためrelativeを指定*/
  position: relative;
  /*ボタンの形状*/
  display: inline-block;
  padding: var(--paddingY) var(--paddingX);
  color: var(--animated-bg-color);
  border: var(--bd-width) solid var(--bd-color);
  text-decoration: none;
  outline: none;

  &:hover {
    color: var(--animated-color);
    border-color: transparent;
    /*色の変化を遅らせる*/
    transition-delay: var(--duration);
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
    background-color: var(--animated-bg-color);
    /*アニメーションの設定*/
    transition: all calc(var(--duration) / 2);
    transform: scale(0, 1);
    transform-origin: center;
  }

  /*hoverをすると背景が伸びる*/
  &:hover::before {
    width: 100%;
    /*0.4秒遅れてアニメーション*/
    transition-delay: calc(var(--duration) / 2 + (var(--duration) / 6));
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
  ${variables}

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
    height: var(--animate-line-thickness);
    background-color: var(--animated-bg-color);
    /*アニメーションの設定*/
    transition: all calc(var(--duration) / 2);
    transform: scale(0, 1);
    transform-origin: center;
  }

  /*上線*/
  &&::before {
    left: 0;
    top: calc(-1 * var(--animate-line-thickness) * 2 / 3);
  }

  /*下線*/
  &&::after {
    left: 0;
    bottom: calc(-1 * var(--animate-line-thickness) * 2 / 3);
  }

  /*hoverをすると線が伸びる*/
  ${STyledAnchor}:hover &&::before,
  ${STyledAnchor}:hover &&::after,
  ${STyledButton}:hover &&::before,
  ${STyledButton}:hover &&::after {
    transform: scale(1, 1);
  }
`
