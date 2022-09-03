import { useState } from 'react'
import { CharacterProps } from './model/props'
import { ImStarFull } from 'react-icons/im'
import { Button } from '../core/Button'

type RatingInputProps = CharacterProps

export const RatingInput = ({ value, max, onClick }: CharacterProps) => {
  const [currRate, setCurrRate] = useState(value)
  const resetRate = () => setCurrRate(value)

  return (
    <div onBlur={resetRate}>
      <input type='hidden' value={currRate} />
      <Button>
        <ImStarFull />
      </Button>
    </div>
  )
}
