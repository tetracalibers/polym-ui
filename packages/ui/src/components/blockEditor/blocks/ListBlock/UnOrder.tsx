import styled from 'styled-components'
import { GroupPanel } from '../GroupPanel'
import { useAddmore } from '../reducer/useAddmore'
import { AddSeparator } from './AddSeparator'
import { listStyle, Li, Input } from './style'

const Ul = styled.ul`
  ${listStyle}
`

export type UListBlockProps = {
  id: string
}

export const UListBlock = ({ id }: UListBlockProps) => {
  const { items, addFn, updateFn } = useAddmore(id)

  return (
    <GroupPanel>
      <Ul>
        {items.map((item, idx) => (
          <Li key={`${id}_${idx}`}>
            <Input value={item} onChange={e => updateFn(e, idx)} />
          </Li>
        ))}
      </Ul>
      <AddSeparator addFn={addFn} />
    </GroupPanel>
  )
}
