import _ from 'lodash'
import { useMemo } from 'react'
import { FloatLabelTextarea } from '../FloatLabelTextarea'
import { GroupPanel } from '../GroupPanel'
import { LangOption, langOptions } from './LangOption'

export type CodeBlockProps = {
  id: string
  lang: LangOption['value']
}

export const CodeBlock = ({ id, lang }: CodeBlockProps) => {
  const langName = useMemo(() => {
    return _.find(langOptions, { value: lang })!.label
  }, [lang])

  return (
    <GroupPanel>
      <FloatLabelTextarea id={id} label={langName} />
    </GroupPanel>
  )
}
