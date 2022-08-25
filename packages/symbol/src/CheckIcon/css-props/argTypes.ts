import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  color: {
    ...withDefaultAs('borderColor'),
    description: 'Color of check mark',
  },
}
