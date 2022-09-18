import { FloatLabelTextarea } from '../FloatLabelTextarea'

export type DetailEditorProps = {
  id: string
}

export const DetailEditor = ({ id }: DetailEditorProps) => {
  return <FloatLabelTextarea id={id} label='detail' />
}
