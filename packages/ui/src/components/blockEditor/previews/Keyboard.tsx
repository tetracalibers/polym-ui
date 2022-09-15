import styled from 'styled-components'

const Kbd = styled.kbd`
  height: 41px;
  min-width: 24px;
  padding: 0 10px;
  margin: 5px 10px;
  background: #eff0f2;
  border-radius: 4px;
  border-top: 1px solid #f5f5f5;
  box-shadow: 0 0 25px #e8e8e8 inset, 0 1px 0 #c3c3c3, 0 2px 0 #c9c9c9,
    0 2px 3px #333333;
  color: #aaaaaa;
  text-shadow: 0 1px 0 #f5f5f5;
  text-align: center;
  line-height: 41px;
  display: inline-block;
`

export type KeyBoardBlockProps = {
  children: string
}

export const KeyBoardPreview = ({ children }: KeyBoardBlockProps) => {
  return <Kbd>{children}</Kbd>
}
