import { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
}

const Text: FC<Props> = props => {
  return <span>{props.children}</span>
}

export default Text
