import { ReactElement, ReactNode } from 'react'
import { VerticalCenter } from '../../layout-algorithm/VerticalCenter'
import { WithSidebar } from '../../layout-algorithm/WithSidebar'

export type MediaObjectProps = {
  children: ReactNode
  media: ReactElement
}

export const MediaObject = ({ children, media }: MediaObjectProps) => {
  return (
    <WithSidebar>
      {media}
      <div>{children}</div>
    </WithSidebar>
  )
}
