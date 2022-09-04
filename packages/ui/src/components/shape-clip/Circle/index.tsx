import { ReactElement } from 'react'
import { ClipMask } from './styled'

type CircleClipProps = {
  children: ReactElement
}

export const CircleClip = ({ children }: CircleClipProps) => {
  return <ClipMask>{children}</ClipMask>
}
