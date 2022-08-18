export const pseudo = ['hover', 'focus'] as const

export type Pseudo = typeof pseudo[number]
