import _ from 'lodash'
import { useMemo } from 'react'
import { FloatLabelTextarea } from '../../reusable/FloatLabel/FloatLabelTextarea'
import { GroupPanel } from '../../organisms/GroupPanel'
import { LangOption, langOptions } from './LangOption'

export type CodeBlockProps = {
  id: string
  lang: LangOption['value']
  code: string
}

export const CodeBlock = ({ id, lang, code }: CodeBlockProps) => {
  const langName = useMemo(() => {
    return _.find(langOptions, { value: lang })!.label
  }, [lang])

  return (
    <GroupPanel>
      <FloatLabelTextarea id={id} label={langName} value={code} />
    </GroupPanel>
  )
}
