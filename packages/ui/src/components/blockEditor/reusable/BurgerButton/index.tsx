import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { ButtonCoreProps } from '../../../core/Button/core'
import { IconOnly } from '../../../core/IconOnly'

/* -------------------------------------------- */
/* STYLE                                        */
/* -------------------------------------------- */

const Button = styled(IconOnly.Button)`
  ${ResetCss.button}

  --size: 2rem;
  --line-height: 2px;
  --gap: calc(var(--size) / 10);
  --paddingY: calc(
    (var(--size) - (var(--line-height) * 3 + var(--gap)) * 2) * 0.5
  );
  --paddingX: calc((var(--size) - var(--size) * 0.45) * 0.5);
  --line1-y: var(--gap);
  --line2-y: calc(var(--gap) + var(--line-height) + var(--gap));
  --line3-y: calc(var(--gap) + (var(--line-height) + var(--gap)) * 2);

  width: var(--size);
  height: var(--size);
`

const Lines = styled.div`
  transition: all 0.6s; /*アニメーションの設定*/
  position: relative;
  height: calc(var(--size) - var(--paddingY) * 2);
  width: calc(var(--size) - var(--paddingX) * 2);
  margin-left: var(--paddingX);
  margin-right: var(--paddingX);

  & > span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 0;
    height: var(--line-height);
    border-radius: 2px;
    background: #fff;
    width: 100%;
  }

  & > span:nth-of-type(1) {
    top: var(--line1-y);
  }

  & > span:nth-of-type(2) {
    top: var(--line2-y);
  }

  & > span:nth-of-type(3) {
    top: var(--line3-y);
  }

  /* 360度回転し、その中の線が回転して×に */
  [aria-expanded='true'] & {
    transform: rotate(360deg);
    transform-origin: center center;
  }

  [aria-expanded='true'] & > span:nth-of-type(1) {
    top: calc(var(--line2-y) - var(--line-height) * 2);
    transform: translateY(calc(var(--line-height) * 2)) rotate(-45deg);
  }

  [aria-expanded='true'] & > span:nth-of-type(2) {
    opacity: 0;
  }

  [aria-expanded='true'] & > span:nth-of-type(3) {
    top: calc(var(--line2-y) + var(--line-height) * 2);
    transform: translateY(calc(var(--line-height) * -2)) rotate(45deg);
  }
`

/* -------------------------------------------- */
/* LOGIC                                        */
/* -------------------------------------------- */

export type BurgerButtonProps = {
  label: string
} & Omit<ButtonCoreProps, 'children'>

export const BurgerButton = ({ label, ...buttonProps }: BurgerButtonProps) => {
  return (
    <Button
      label={label}
      icon={
        <Lines>
          <span></span>
          <span></span>
          <span></span>
        </Lines>
      }
      {...buttonProps}
    />
  )
}
