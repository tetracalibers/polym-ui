import {
  ComponentPropsWithoutRef,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
  ChangeEvent,
  useEffect,
} from 'react'
import { useShareState } from '@polym/hooks'
import { STyledInput, STyledNumberInput } from './styled'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { defaultNumberInputProps, NumberInputProps } from './model/props'
import { Button } from '../Button'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { nanoid } from 'nanoid'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'

/* -------------------------------------------- */
/* HOOK                                         */
/* -------------------------------------------- */

const useShareId = () => {
  const [id, setId] = useState<string>()

  const updateId = useCallback((newId: string) => {
    setId(newId)
  }, [])

  return [id, updateId] as const
}

const useRegisterId = (
  id: string | undefined,
  updateFn: (id: string) => void
) => {
  useLayoutEffect(() => {
    const notUndefinedId = id ?? nanoid()
    updateFn(notUndefinedId)
  }, [])
}

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
  useRegisterId(id, updateLabelId)

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
  useRegisterId(id, updateInputId)

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
  initNum = defaultNumberInputProps.initNum,
  ...props
}: InnerInputCommonProps & NumberInputProps) => {
  const { inputId, updateInputId, labelId } = useContext(InputContext)
  useRegisterId(id, updateInputId)

  if (!stepper) {
    return <STyledNumberInput type='number' {...props} ref={ref} id={inputId} />
  }

  const [count, setCount] = useState<string>(initNum!.toString())
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputNum = e.target.value
    setCount(inputNum)
  }
  const onDecrement = () => setCount((+count - 1).toString())
  const onIncrement = () => setCount((+count + 1).toString())

  return (
    <div>
      <Button
        aria-label='decrease'
        aria-describedby={labelId}
        onClick={onDecrement}
      >
        <CgMathMinus />
      </Button>
      <input
        type='number'
        {...props}
        ref={ref}
        id={inputId}
        value={count}
        onChange={onInput}
      />
      <Button
        aria-label='increase'
        aria-describedby={labelId}
        onClick={onIncrement}
      >
        <CgMathPlus />
      </Button>
      <VisuallyHidden role='status' aria-live='polite'>
        {count}
      </VisuallyHidden>
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

  const [inputId, updateInputId] = useShareId()
  const [labelId, updateLabelId] = useShareId()

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
