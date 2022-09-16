import _ from 'lodash'
import { useContext } from 'react'
import { BlockEditorContext } from '..'
import { ChoiceItem } from '../../DropdownSelect/model/props'
import { FormatArgs } from '../module/FormatArgs'
import { UpdateAction } from '../module/reducer'
import { ComboBox } from './ComboBox'

type LangOption = {
  value: FormatArgs['code']['lang']
  label: string
}

const langOptions: LangOption[] = [
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

export type CodeLangSelectProps = {
  id: string
  initialLang?: FormatArgs['code']['lang']
}

export const CodeLangSelect = ({ id, initialLang }: CodeLangSelectProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (selectedItem: ChoiceItem) => {
    const lang = selectedItem.value as FormatArgs['code']['lang']
    const action: UpdateAction<'code'> = {
      type: 'UPDATE',
      args: { id, diff: { lang } },
    }
    dispatch(action)
  }

  const initialItem = _.find(langOptions, { value: initialLang })

  return (
    <ComboBox
      choices={langOptions}
      label='language'
      onSelect={updateFn}
      initialSelected={initialItem}
    />
  )
}
