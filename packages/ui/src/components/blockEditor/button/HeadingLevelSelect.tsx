import { ChoiceItem } from '../../DropdownSelect/model/props'
import { ComboBox } from '../menu/ComboBox'

const options: ChoiceItem[] = [...new Array(6)].map((_, idx) => ({
  value: idx + 1,
  label: `h${idx + 1}`,
}))

export const HeadingLevelSelect = () => {
  return <ComboBox choices={options} label='heading-lavel' />
}
