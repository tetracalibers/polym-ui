import { FormatArgs } from '../../core/FormatArgs'

export type LangOption = {
  value: FormatArgs['code']['lang']
  label: string
}

export const langOptions: LangOption[] = [
  {
    value: 'js',
    label: 'JavaScript',
  },
  {
    value: 'ts',
    label: 'TypeScript',
  },
  {
    value: 'css',
    label: 'CSS',
  },
  {
    value: 'html',
    label: 'HTML',
  },
]
