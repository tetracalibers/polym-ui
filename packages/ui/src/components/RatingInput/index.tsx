import { useMemo, useState } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { ImStarFull } from 'react-icons/im'
import { nanoid } from 'nanoid'
import { RateButton } from './styled'
import { VisuallyHidden } from '../a11y-helper/VisuallyHidden'

export const RatingInput = ({
  value = defaultProps.value,
  max = defaultProps.max,
  onSelectRate,
}: CharacterProps) => {
  const [selectedRate, setSelectedRate] = useState<number>(value!)
  const [coloredRate, setColoredRate] = useState<number>(value!)
  const resetColor = () => setColoredRate(selectedRate)
  const selectRate = (value: number) => {
    setSelectedRate(value)
    setColoredRate(value)
  }

  const buttons = useMemo(
    () =>
      [...new Array(max)].map((_v, i) => {
        return {
          key: nanoid(),
          value: i + 1,
        }
      }),
    [max]
  )

  const onValueChanged = () => onSelectRate && onSelectRate(selectedRate)

  return (
    <div onMouseOut={resetColor}>
      <input type='hidden' value={selectedRate} onChange={onValueChanged} />
      {buttons.map(({ key, value }) => (
        <RateButton
          icon={<ImStarFull />}
          label={`rate_${value}`}
          key={key}
          onClick={() => selectRate(value)}
          onMouseOver={() => setColoredRate(value)}
          data-coloring={value <= coloredRate}
        />
      ))}
      <VisuallyHidden role='status' aria-live='polite'>
        {selectedRate}
      </VisuallyHidden>
    </div>
  )
}
