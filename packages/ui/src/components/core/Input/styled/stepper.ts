import styled from 'styled-components'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { Button } from '../../Button'

export const Root = styled.div`
  display: flex;
`

export const NumberInput = styled.input`
  /* リセット --------------------------------------- */
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* スタイル --------------------------------------- */
  border: 1px solid ${$.pastel.purple};
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 2rem;
  padding: 0 1em;
  box-sizing: content-box;
  min-width: 1em;
  width: ${({ value }) => (value as string)?.length ?? 1}ch;

  &:focus {
    outline: 2px solid ${$.pastel.water};
  }
`

const CounterButton = styled(Button)`
  ${ResetCss.button}

  color: #fff;
  font-size: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IncrementButton = styled(CounterButton)`
  background-color: rgb(244, 143, 177);
  border-radius: 0 0.5em 0.5em 0;
`

export const DecrementButton = styled(CounterButton)`
  background-color: rgb(128, 222, 234);
  border-radius: 0.5em 0 0 0.5em;
`
