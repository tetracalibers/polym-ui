import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { HorizontalCenter } from '../../layout-algorithm/HorizontalCenter'
import { HorizontalStack } from '../../layout-algorithm/HorizontalStack'
import { VerticalCenter } from '../../layout-algorithm/VerticalCenter'
import { WithSidebar } from '../../layout-algorithm/WithSidebar'
import { Float, Tuning } from './styled'

export type MediaObjectProps = {
  children: ReactNode
  media: ReactElement
  mediaSide?: 'left' | 'right'
}

export const MediaObject = ({
  children,
  media,
  mediaSide = 'left',
}: MediaObjectProps) => {
  return (
    <ThemeProvider theme={{ mediaSide }}>
      <Tuning>
        {media}
        <div>{children}</div>
      </Tuning>
    </ThemeProvider>
  )
}
