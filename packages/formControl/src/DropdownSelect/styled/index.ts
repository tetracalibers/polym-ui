import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const Root = styled.div``

export const AutoComplete = styled.div``

export const InputControl = styled.div``

export const SelectList = styled.ul`
  /* メニューをスクロール可能にする */
  max-height: 12em;
  overflow-y: scroll;
  /* iOSで慣性スクロールができるようにする */
  -webkit-overflow-scrolling: touch;

  /* focus highlight */
  & [role='option'][aria-selected='true'] {
    background-color: #005ea5;
    border-color: #005ea5;
    color: #fff;
  }
`
