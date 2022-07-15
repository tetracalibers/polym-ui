import { customAlphabet } from 'nanoid'
import pkg from 'nanoid-dictionary'
const { alphanumeric, numbers } = pkg

export const alphanumericId = customAlphabet(alphanumeric)
export const numberId = customAlphabet(numbers, 10)
