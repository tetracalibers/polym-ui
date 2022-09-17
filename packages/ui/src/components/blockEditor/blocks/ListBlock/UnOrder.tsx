import styled from 'styled-components'
import { GroupPanel } from '../GroupPanel'
import { useAddmore } from '../reducer/useAddmore'
import { AddSeparator } from './AddSeparator'
import { Input } from './style'

const Ul = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
`

const Li = styled.li`
  padding-left: 0.5rem;
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
