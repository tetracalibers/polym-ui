import _ from 'lodash'
import { ComponentPropsWithoutRef, forwardRef, ReactElement } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { WithIcon } from '../WithIcon'
import { IconButton } from './styled'
import { BsFileEarmarkMedical } from 'react-icons/bs'

export type FileProps = CharacterProps & ComponentPropsWithoutRef<'div'>

export type FileComponent = (props: FileProps) => ReactElement | null

export const File: FileComponent = forwardRef(
  ({ children, ..._props }: FileProps) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )

    return (
      <WithIcon as={IconButton} type='button' alignItems={'center'}>
        <BsFileEarmarkMedical />
        {children}
      </WithIcon>
    )
  }
)
