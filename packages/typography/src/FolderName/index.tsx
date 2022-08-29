import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactElement,
  useState,
} from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { WithIcon } from '../WithIcon'
import { ImFolder, ImFolderOpen } from 'react-icons/im'
import { IconButton } from './styled'

export type FolderNameProps = CharacterProps & ComponentPropsWithoutRef<'div'>

export type FolderNameComponent = (
  props: FolderNameProps
) => ReactElement | null

export const FolderName: FolderNameComponent = forwardRef(
  ({ children, ..._props }: FolderNameProps) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )

    const [isOpen, setOpenStatus] = useState(false)

    const toggleOpen = () => setOpenStatus(!isOpen)

    return (
      <WithIcon
        as={IconButton}
        type='button'
        onClick={toggleOpen}
        alignItems={'center'}
      >
        {isOpen ? <ImFolderOpen /> : <ImFolder />}
        {children}
      </WithIcon>
    )
  }
)
