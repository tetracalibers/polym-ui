export const config = {
  text: ['color', 'typography'],
  box: ['this.text', 'space', 'layout', 'position'],
  decorativeText: ['this.text', { shadow: 'textShadow' }],
  decorativeBox: ['this.box', 'border', 'background', { shadow: 'boxShadow' }],
} as const

export namespace GroupingBased {
  export type PropsMap = typeof config
  export type PropsCategory = keyof PropsMap
}
