import * as P from 'react-tsx-props'

const args = {
  recursive: P.Required<boolean>(false),
  root: P.Required<string>('&'),
} as const

export type Args = P.getPropType<typeof args>
const args_default = P.getDefaultProps<Args>(args)

export function continuousElements(args: Args = args_default) {
  const { recursive, root } = args
  return recursive ? `${root} > * + *` : `${root} * + *`
}

declare module 'styled-utility-first/SELECT' {
  export function continuousElements(args: Args): string
}
