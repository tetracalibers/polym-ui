import {
  ComponentPropsWithoutRef,
  createContext,
  Dispatch,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'
import { useNanoId, useShareState } from '@polym/hooks'
import { STyledInput, STyledNumberInput } from './styled'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { NumberInputProps } from './model/props'
import { Button } from '../Button'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { nanoid } from 'nanoid'

/* -------------------------------------------- */
/* CONTEXT                                      */
/* -------------------------------------------- */

type InputState = {
  inputId?: string
  labelId?: string
  updateInputId: (id: string) => void
  updateLabelId: (id: string) => void
}

const InputContext = createContext<InputState>({} as InputState)

/* -------------------------------------------- */
/* LABEL                                        */
/* -------------------------------------------- */

type LabelProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'label'>, 'children' | 'htmlFor'>

const Label = ({ children, id, ...props }: LabelProps) => {
  const { inputId, updateLabelId, labelId } = useContext(InputContext)

  useLayoutEffect(() => {
    const newId = id ?? nanoid()
    updateLabelId(newId)
  }, [])

  return (
    <label {...props} htmlFor={inputId} id={labelId}>
      {children}
    </label>
  )
}

/* -------------------------------------------- */
/* INPUT PROPS                                  */
/* -------------------------------------------- */

type InnerInputCommonProps = {
  ref?: ForwardedRef<HTMLInputElement>
} & Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type'>

/* -------------------------------------------- */
/* TEXT INPUT                                   */
/* -------------------------------------------- */

const _Text = ({ ref, id, ...props }: InnerInputCommonProps) => {
  const { inputId, updateInputId } = useContext(InputContext)

  useLayoutEffect(() => {
    const newId = id ?? nanoid()
    updateInputId(newId)
  }, [])

  return <STyledInput type='text' {...props} ref={ref} id={inputId} />
}
const Text = forwardRef(_Text)

/* -------------------------------------------- */
/* NUMBER INPUT                                 */
/* -------------------------------------------- */

const _Number = ({
  ref,
  stepper,
  id,
  ...props
}: InnerInputCommonProps & NumberInputProps) => {
  const { inputId, updateInputId } = useContext(InputContext)

  useLayoutEffect(() => {
    const newId = id ?? nanoid()
    updateInputId(newId)
  }, [])

  if (!stepper) {
    return <STyledNumberInput type='number' {...props} ref={ref} id={inputId} />
  }

  return (
    <div>
      <Button aria-label='decrease'>
        <CgMathMinus />
      </Button>
      <input type='number' {...props} ref={ref} id={inputId} />
      <Button aria-label='increase'>
        <CgMathPlus />
      </Button>
    </div>
  )
}
const Number = forwardRef(_Number)

/* -------------------------------------------- */
/* ROOT                                         */
/* -------------------------------------------- */

export type InputCoreProps = {
  children: [
    ReactElement<LabelProps, typeof Label>,
    ReactElement<InnerInputCommonProps, typeof Text | typeof Number>
  ]
}

export const Input = ({ children }: InputCoreProps) => {
  const [Label, Input] = children

  const [inputId, setInputId] = useState<string>()
  const [labelId, setLabelId] = useState<string>()

  const updateInputId = useCallback((id: string) => {
    setInputId(id)
  }, [])

  const updateLabelId = useCallback((id: string) => {
    setLabelId(id)
  }, [])

  const shareState = useShareState(
    { inputId, updateInputId, labelId, updateLabelId },
    [inputId, labelId]
  )

  return (
    <InputContext.Provider value={shareState}>
      <VerticalStack spaceV={0.5}>
        {Label}
        {Input}
      </VerticalStack>
    </InputContext.Provider>
  )
}

/* -------------------------------------------- */

Input.Label = Label
Input.Text = Text
Input.Number = Number
