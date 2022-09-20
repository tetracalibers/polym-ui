import styled from 'styled-components'
import { FormatArgs } from '../../core/FormatArgs'
import { GroupPanel } from '../GroupPanel'
import { useAddmore } from '../reducer/useAddmore'
import { AddSeparator } from './AddSeparator'
import { Input } from './style'

const Ol = styled.ol`
  padding-left: 2rem;
  margin: 0;
`

const Li = styled.li`
  padding-left: 0;
`

export type OListBlockProps = {
  id: string
  start: number
  items: FormatArgs['olist']['items']
}

export const OListBlock = ({ id, start = 1, items = [] }: OListBlockProps) => {
  const { addFn, updateFn } = useAddmore(id)

  return (
    <GroupPanel>
      <Ol start={start}>
        {items.map((item, idx) => (
          <Li key={`${id}_${idx}`}>
            <Input value={item} onChange={e => updateFn(e, idx)} />
          </Li>
        ))}
      </Ol>
      <AddSeparator addFn={addFn} />
    </GroupPanel>
  )
}
