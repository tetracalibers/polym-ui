import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledButton = styled.div<CharacterProps>`
  --background-color: ${({ backgroundColor }) => backgroundColor};
  --width: ${({ width }) => width};
  --border-radius: ${({ borderRadius }) => borderRadius};

  position: relative; /*ボタン内側の基点となるためrelativeを指定*/
  background-color: var(--background-color);
  cursor: pointer;
  width: var(--width);
  height: var(--width);
  border-radius: var(--border-radius);

  /* JumpToCrossの場合 */
  overflow: hidden; /*ジャンプしてはみ出た要素を消す*/
`

export const SymbolWrapper = styled.div<CharacterProps>``

const Line = styled.span<CharacterProps>`
  --transition-duration: ${({ transitionDuration }) => transitionDuration};
  --color: ${({ color }) => color};

  display: inline-block;
  transition: all var(--transition-duration); /*アニメーションの設定*/
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background-color: var(--color);
  width: 45%;
`

export const Line1 = styled(Line)<CharacterProps>``

export const Line2 = styled(Line)<CharacterProps>``

export const Line3 = styled(Line)<CharacterProps>``
