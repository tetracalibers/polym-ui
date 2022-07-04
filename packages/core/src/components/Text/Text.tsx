import type { FC } from 'react'

const Text: FC<{ content: string }> = props => {
  return <span>{props.content}</span>
}

export default Text
