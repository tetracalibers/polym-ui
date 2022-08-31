import _ from 'lodash'
import { ComponentPropsWithoutRef, ReactElement } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { BsFileEarmarkMedical } from 'react-icons/bs'
import { WithIcon } from '../core'

export type FileNameProps = CharacterProps & ComponentPropsWithoutRef<'div'>

export type FileNameComponent = (props: FileNameProps) => ReactElement | null

export const FileName: FileNameComponent = ({
  children,
  ..._props
}: FileNameProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  return (
    <WithIcon alignItems={'center'}>
      <BsFileEarmarkMedical />
      {children}
    </WithIcon>
  )
}
