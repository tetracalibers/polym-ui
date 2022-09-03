import { SyntheticEvent, useMemo, useState } from 'react'
import { CharacterProps } from './model/props'
import { ImStarFull } from 'react-icons/im'
import { IconOnly } from '../core/IconOnly'
import { nanoid } from 'nanoid'

export const RatingInput = ({ value, max, onClick }: CharacterProps) => {
  const [currRate, setCurrRate] = useState(value)
  const resetRate = () => setCurrRate(value)

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

  const clickHandler = (e: SyntheticEvent, val: number) =>
    onClick && onClick(e, val)

  return (
    <div onBlur={resetRate}>
      <input type='hidden' value={currRate} />
      {buttons.map(({ key, value }) => (
        <IconOnly.Button
          icon={<ImStarFull />}
          label={`rate_${value}`}
          key={key}
          onClick={e => clickHandler(e, value)}
        />
      ))}
    </div>
  )
}
