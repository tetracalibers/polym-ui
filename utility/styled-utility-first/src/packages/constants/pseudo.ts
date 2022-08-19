export const pseudoClass = [
  'hover',
  'focus',
  'disabled',
  'active',
  'focus-visible',
] as const
export type PseudoClass = typeof pseudoClass[number]

export const pseudoElement = ['before', 'after'] as const
export type PseudoElement = typeof pseudoElement[number]

export const pseudo = [...pseudoClass, ...pseudoElement] as const
export type Pseudo = typeof pseudo[number]
