import { ReactElement } from 'react'
import { WithSidebar } from '../../layout-algorithm/WithSidebar'

export type MediaObjectProps = {
  children: ReactElement
  media: ReactElement
}

export const MediaObject = ({ children, media }: MediaObjectProps) => {
  return (
    <WithSidebar>
      {media}
      {children}
    </WithSidebar>
  )
}
