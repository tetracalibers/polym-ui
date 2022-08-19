export const pseudo = ['hover', 'focus', 'disabled', 'active'] as const

export type Pseudo = typeof pseudo[number]
