import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  // space: {
  //   ...withDefaultAs('marginTop'),
  //   description: 'Spacing of elements in a vertical line',
  //   table: {
  //     type: {
  //       summary: null,
  //     },
  //     category: 'style control',
  //     defaultValue: {
  //       summary: styleDefaultProps.space,
  //       details: null,
  //     },
  //   },
  // },
}
