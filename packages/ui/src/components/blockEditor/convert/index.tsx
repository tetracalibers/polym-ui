import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { BlockType } from '../core/config'
import { Popup } from '../reusable/PopupMenu'
import { ChangeBoxTypeMenu } from './ChangeBoxTypeMenu'
import { BurgerButton } from '../reusable/BurgerButton'
import { match } from 'ts-pattern'
import { HeadingLevelSelect } from './HeadingLevelSelect'
import { FormatArgs } from '../types/FormatArgs'
import { CodeLangSelect } from './CodeLangSelect'
import { OListStartStepper } from './OlistOrderStart'
import { BlockStateMap } from '../core/store'
import { ActionButtonStyle } from '../button/style/ActionButton'

/* -------------------------------------------- */
/* STYLE                                        */
/* -------------------------------------------- */

const OpenMenuButton = styled(BurgerButton)`
  ${ActionButtonStyle}
  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);
`

const PositionManager = styled.div`
  position: relative;
`

const MenuList = styled.ul`
  position: absolute;
  list-style-type: none;
  top: 100%;
  right: 0;
  z-index: 2;
  margin: 0;
  padding: 0.5rem;
  background-color: rgba(210, 218, 255, 0.5);
  backdrop-filter: blur(10px);
  white-space: nowrap;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  & button {
    ${ResetCss.button}
  }

  & li {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  & li:not(:last-child) {
    padding-bottom: 0.25rem;
  }

  & li + li {
    padding-top: 0.25rem;
    border-top: 2px dashed #aac4ff;
  }
`

/* -------------------------------------------- */
/* LOGIC                                        */
/* -------------------------------------------- */

export type ConvertMenuProps<T extends BlockType> = {
  block: BlockStateMap[T]
}

export const ConvertMenu = <T extends BlockType>({
  block,
}: ConvertMenuProps<T>) => {
  const { currBox, allowBox, id, type, formatArg } = block

  const Option = match(type as BlockType)
    .with('heading', () => {
      const level = (formatArg as FormatArgs['heading']).level
      return <HeadingLevelSelect id={id} initialLevel={level} />
    })
    .with('code', () => {
      const lang = (formatArg as FormatArgs['code']).lang
      return <CodeLangSelect id={id} initialLang={lang} />
    })
    .with('olist', () => {
      const order = (formatArg as FormatArgs['olist']).order
      return <OListStartStepper id={id} order={order} />
    })
    .otherwise(() => false)

  const convertible = allowBox === 'both' || Option

  return (
    <>
      {convertible && (
        <PositionManager>
          <Popup>
            <Popup.Trigger>
              <OpenMenuButton label='block type options' />
            </Popup.Trigger>
            <Popup.Menu>
              <MenuList>
                {allowBox === 'both' && (
                  <ChangeBoxTypeMenu initialBox={currBox} id={id} />
                )}
                {Option && <li>{Option}</li>}
              </MenuList>
            </Popup.Menu>
          </Popup>
        </PositionManager>
      )}
    </>
  )
}
