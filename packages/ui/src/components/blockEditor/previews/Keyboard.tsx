import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { Fragment } from 'react'

const Layout = styled.div`
  --color: #4d608b;

  display: inline-flex;
  flex-wrap: wrap;
  gap: 0;
  align-items: center;

  & svg {
    fill: var(--color);
    stroke: var(--color);
  }
`

const Kbd = styled.kbd`
  height: 2rem;
  min-width: 24px;
  padding: 0 10px;
  margin: 5px 10px;
  background: #eff0f2;
  border-radius: 4px;
  border-top: 1px solid #f5f5f5;
  box-shadow: 0 0 25px #e8e8e8 inset, 0 1px 0 #c3c3c3, 0 2px 0 #c9c9c9,
    0 2px 3px #333333;
  color: var(--color);
  text-shadow: 0 1px 0 #f5f5f5;
  text-align: center;
  line-height: 2rem;
  display: inline-block;
`

export type KeyBoardBlockProps = {
  keyNames: string[]
}

export const KeyBoardPreview = ({ keyNames }: KeyBoardBlockProps) => {
  const Keys = keyNames.reduce((prev, curr, idx) => {
    return (
      <Fragment key={curr + '_' + idx}>
        {prev}
        {!!idx && <AiOutlinePlus aria-label='and' />}
        <Kbd>{curr}</Kbd>
      </Fragment>
    )
  }, <></>)

  return <Layout>{Keys}</Layout>
}
