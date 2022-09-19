export const imageFileTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/gif',
  'image/svg+xml',
] as const

export type FileTypes = typeof imageFileTypes[number]
