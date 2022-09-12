import styled from 'styled-components'
import { IconOnly } from '../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'

export const ToolIconButton = styled(IconOnly.Button)`
  ${ResetCss.button}
  --size: 2rem;

  /* 以下、DripButtonより引用 -------------------------- */

  /* -------------------------------------------- */
  /* CIRCLE                                       */
  /* -------------------------------------------- */
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: #045de9;

  /* -------------------------------------------- */
  /* DRIP                                         */
  /* -------------------------------------------- */
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  transition: 0.3s ease-out;
  box-shadow: inset 14px 0px 5px -10px rgb(77 96 139/ 20%),
    inset 13px 0px 2px -10px rgb(77 96 139/ 20%),
    inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
    inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
    inset -20px 10px 5px -20px rgb(77 96 139/ 30%),
    inset -20px 15px 10px -20px rgb(77 96 139/ 20%),
    inset 0px 20px 30px -5px rgb(77 96 139/ 30%),
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:hover {
    box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
      inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
      inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
      inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
      inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
      inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
      inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
      0px 2px 1px -1px rgb(245 225 183 / 80%);
  }

  /* -------------------------------------------- */
  /* ICON                                         */
  /* -------------------------------------------- */

  && svg {
    font-size: calc(var(--size) * 0.64);
    color: #ffffff80;
    filter: drop-shadow(1px 1px 10px white);
    /* filterのmobile対応 */
    transform: translateZ(0);
  }
`
