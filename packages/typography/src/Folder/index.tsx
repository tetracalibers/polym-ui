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

export type FolderProps = CharacterProps & ComponentPropsWithoutRef<'div'>

export type FolderComponent = (props: FolderProps) => ReactElement | null

export const Folder: FolderComponent = forwardRef(
  ({ children, ..._props }: FolderProps) => {
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
