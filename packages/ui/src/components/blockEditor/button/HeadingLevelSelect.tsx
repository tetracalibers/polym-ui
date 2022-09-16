import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '..'
import { ChoiceItem } from '../../DropdownSelect/model/props'
import { ComboBox } from '../menu/ComboBox'
import { UpdateAction } from '../module/reducer'

const options: ChoiceItem[] = [...new Array(6)].map((_, idx) => ({
  value: idx + 1,
  label: `h${idx + 1}`,
}))

export type HeadingLevelSelectProps = {
  id: string
  initialLevel?: number
}

const isValidLevel = (level: number): level is 1 | 2 | 3 | 4 | 5 | 6 => {
  return [1, 2, 3, 4, 5, 6].includes(level)
}

export const HeadingLevelSelect = ({
  id,
  initialLevel = 2,
}: HeadingLevelSelectProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (selectedItem: ChoiceItem) => {
    const level = +selectedItem.value
    if (isValidLevel(level)) {
      const action: UpdateAction<'heading'> = {
        type: 'UPDATE',
        args: {
          id,
          diff: {
            level,
          },
        },
      }
      dispatch(action)
    }
  }

  const initialItem = {
    value: initialLevel,
    label: `h${initialLevel}`,
  }

  return (
    <ComboBox
      choices={options}
      label='heading-level'
      onSelect={updateFn}
      initialSelected={initialItem}
    />
  )
}
