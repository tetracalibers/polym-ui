import styled from 'styled-components'
import { GroupPanel } from '../GroupPanel'
import { useAddmore } from '../reducer/useAddmore'
import { AddSeparator } from './AddSeparator'
import { listStyle, Li, Input } from './style'

const Ol = styled.ol`
  ${listStyle}
`

export type OListBlockProps = {
  id: string
}

export const OListBlock = ({ id }: OListBlockProps) => {
  const { items, addFn, updateFn } = useAddmore(id)

  return (
    <GroupPanel>
      <Ol>
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
