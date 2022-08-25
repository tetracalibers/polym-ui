import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const Label = styled.label<{ disabled: boolean | undefined }>`
  cursor: pointer;
  user-select: none;

  ${({ disabled }) => {
    return Truthy(disabled).when(css`
      cursor: default;
    `)
  }}
`
export const Input = styled.input<CharacterProps>`
  /* 透明にして見えなくする */
  opacity: 0;
  /* 本来の配置から切り離す */
  position: absolute;
`
