import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../module/reducer'
import { FloatLabelInput } from '../FloatLabelInput'

type SummaryEditorProps = {
  id: string
}

export const SummaryEditor = ({ id }: SummaryEditorProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const action: UpdateAction<'toggle'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          summary: e.target.value,
        },
      },
    }
    dispatch(action)
  }

  return <FloatLabelInput id={id} label='summary' onChange={updateFn} />
}
