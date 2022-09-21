import { FloatLabelTextarea } from '../../reusable/FloatLabel/TextArea'

export type ContentInputProps = {
  id: string
  value: string
}

export const ContentInput = ({ id, value }: ContentInputProps) => {
  return <FloatLabelTextarea id={id} label='quotation text' value={value} />
}
