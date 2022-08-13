import { Required, getPropType, getDefaultProps } from 'react-tsx-props'

export namespace CONTINUOUS_ELEMENTS {
  export const args = {
    recursive: Required<boolean>(false),
    root: Required<string>('&'),
  } as const

  export type Args = getPropType<typeof args>

  export const args_default = getDefaultProps<Args>(args)

  export const continuousElements = (arg: Args = args_default) => {
    const { recursive, root } = arg
    return recursive ? `${root} > * + *` : `${root} * + *`
  }
}
