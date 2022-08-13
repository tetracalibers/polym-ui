import 'styled-utility-first/SELECT'

import * as P from 'react-tsx-props'

const args = {
  recursive: P.Required<boolean>(false),
  root: P.Required<string>('&'),
} as const

type Args = P.getPropType<typeof args>
const args_default = P.getDefaultProps<Args>(args)

export const continuousElements = (args: Args = args_default) => {
  const { recursive, root } = args
  return recursive ? `${root} > * + *` : `${root} * + *`
}
