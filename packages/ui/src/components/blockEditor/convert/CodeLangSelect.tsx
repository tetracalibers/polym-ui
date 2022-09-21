import _ from 'lodash'
import { useContext } from 'react'
import { BlockEditorContext } from '..'
import { ChoiceItem } from '../../DropdownSelect/model/props'
import { langOptions } from '../blocks/CodeBlock/LangOption'
import { UpdateAction } from '../core/actions'
import { ComboBox } from '../reusable/ComboBox'
import { FormatArgs } from '../types/FormatArgs'

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
