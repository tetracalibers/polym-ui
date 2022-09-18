import { FloatLabelTextarea } from '../FloatLabelTextarea'

export type ContentInputProps = {
  id: string
}

export const ContentInput = ({ id }: ContentInputProps) => {
  return <FloatLabelTextarea id={id} label='quotation text' />
}
