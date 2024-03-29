import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  borderColor: {
    ...withDefaultAs('borderColor'),
  },
  animationDuration: {
    ...withDefaultAs('animationDuration'),
  },
}
