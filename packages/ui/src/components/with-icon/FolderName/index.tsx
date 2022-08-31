import _ from 'lodash'
import { ComponentPropsWithoutRef, ReactElement, useState } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { ImFolder, ImFolderOpen } from 'react-icons/im'
import { Wrapper } from './styled'
import { WithIcon } from '../core'

export type FolderNameProps = CharacterProps & ComponentPropsWithoutRef<'div'>

export type FolderNameComponent = (
  props: FolderNameProps
) => ReactElement | null

export const FolderName: FolderNameComponent = ({
  children,
  ..._props
}: FolderNameProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  const [isOpen, setOpenStatus] = useState(false)

  const toggleOpen = () => setOpenStatus(!isOpen)

  return (
    <WithIcon onClick={toggleOpen} alignItems={'center'} as={Wrapper}>
      {isOpen ? <ImFolderOpen /> : <ImFolder />}
      {children}
    </WithIcon>
  )
}
