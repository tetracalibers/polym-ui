import { ACCESS, DEFINE } from 'react-tsx-props'

const args = {
  recursive: DEFINE.Required<boolean>(false),
  root: DEFINE.Required<string>('&'),
} as const

export type Args = ACCESS.getPropType<typeof args>
const args_default = ACCESS.getDefaultProps<Args>(args)

export function continuousElements(args: Args = args_default) {
  const { recursive, root } = args
  return recursive ? `${root} > * + *` : `${root} * + *`
}

declare module 'styled-utility-first/SELECT' {
  export function continuousElements(args: Args): string
}
