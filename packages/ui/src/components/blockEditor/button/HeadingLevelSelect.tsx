import { DropdownSelect } from '../../DropdownSelect'
import { ChoiceItem } from '../../DropdownSelect/model/props'

const options: ChoiceItem[] = [...new Array(6)].map((_, idx) => ({
  value: idx + 1,
  label: `h${idx + 1}`,
}))

export const HeadingLevelSelect = () => {
  return (
    <DropdownSelect
      choices={options}
      name='heading-lavel'
      onSelect={() => {}}
      initialValue={1}
    />
  )
}
