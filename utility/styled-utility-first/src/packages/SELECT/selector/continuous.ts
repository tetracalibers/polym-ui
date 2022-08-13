import { Required, getPropType, getDefaultProps } from 'react-tsx-props'

const args = {
  recursive: Required<boolean>(false),
  root: Required<string>('&'),
} as const

export type Args = getPropType<typeof args>
const args_default = getDefaultProps<Args>(args)

export const CONTINUOUS_ELEMENTS = {
  continuousElements(args: Args = args_default) {
    const { recursive, root } = args
    return recursive ? `${root} > * + *` : `${root} * + *`
  },
}
