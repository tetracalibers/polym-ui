import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { FileName, FolderName } from '@polym-ui/typography'

export interface NodeLabelProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  type: 'node' | 'leaf'
  open?: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  max-height: 28px;
  color: #646464;
  transition: color linear 0.2s;

  &:hover {
    color: #000000;
  }
`

const INodeLabel: ForwardRefRenderFunction<HTMLDivElement, NodeLabelProps> = (
  { name, type, open = false, ...rest },
  ref
) => {
  return (
    <Wrapper ref={ref} {...rest}>
      {type === 'node' ? (
        <FolderName>{name}</FolderName>
      ) : (
        <FileName>{name}</FileName>
      )}
    </Wrapper>
  )
}

export const NodeLabel = forwardRef(INodeLabel)
