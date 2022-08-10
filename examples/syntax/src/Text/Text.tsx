import { ReactNode, FC } from 'react'
import { StylePatchProvider } from '@react-polyhex-ui/styling-patch'

type Props = {
  children: ReactNode
}

const Text: FC<Props> = (props: Props) => {
  return (
    <StylePatchProvider>
      <span>{props.children}</span>
    </StylePatchProvider>
  )
}

export default Text
