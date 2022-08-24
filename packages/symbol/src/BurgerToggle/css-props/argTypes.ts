import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  // space: {
  //   ...withDefaultAs('gap'),
  //   description: 'Spacing of elements horizontally aligned',
  //   table: {
  //     type: {
  //       summary: null,
  //     },
  //     category: 'style control',
  //     defaultValue: {
  //       summary: '',
  //       details: null,
  //     },
  //   },
  // },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
  width: {
    ...withDefaultAs('width'),
  },
  borderRadius: {
    ...withDefaultAs('borderRadius'),
  },
  transitionDuration: {
    ...withDefaultAs('transitionDuration'),
  },
  color: {
    ...withDefaultAs('color'),
  },
}
