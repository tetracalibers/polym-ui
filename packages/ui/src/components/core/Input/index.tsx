import {
  ComponentPropsWithoutRef,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useContext,
} from 'react'
import { useNanoId, useShareState } from '@polym/hooks'
import { STyledInput, STyledNumberInput } from './styled'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { NumberInputProps } from './model/props'
import { Button } from '../Button'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'

/* -------------------------------------------- */
/* CONTEXT                                      */
/* -------------------------------------------- */

type InputState = {
  relationId: string
}

const InputContext = createContext<InputState>({} as InputState)

/* -------------------------------------------- */
/* LABEL                                        */
/* -------------------------------------------- */

type LabelProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'label'>, 'children' | 'htmlFor'>

const Label = ({ children, ...props }: LabelProps) => {
  const { relationId } = useContext(InputContext)

  return (
    <label {...props} htmlFor={relationId}>
      {children}
    </label>
  )
}

/* -------------------------------------------- */
/* INPUT PROPS                                  */
/* -------------------------------------------- */

type InnerInputCommonProps = {
  ref?: ForwardedRef<HTMLInputElement>
} & Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type' | 'id'>

/* -------------------------------------------- */
/* TEXT INPUT                                   */
/* -------------------------------------------- */

const _Text = ({ ref, ...props }: InnerInputCommonProps) => {
  const { relationId } = useContext(InputContext)

  return <STyledInput type='text' {...props} ref={ref} id={relationId} />
}
const Text = forwardRef(_Text)

/* -------------------------------------------- */
/* NUMBER INPUT                                 */
/* -------------------------------------------- */

const _Number = ({
  ref,
  stepper,
  ...props
}: InnerInputCommonProps & NumberInputProps) => {
  const { relationId } = useContext(InputContext)

  if (!stepper) {
    return (
      <STyledNumberInput type='number' {...props} ref={ref} id={relationId} />
    )
  }

  return (
    <div>
      <Button aria-label='decrease'>
        <CgMathMinus />
      </Button>
      <input type='number' {...props} ref={ref} id={relationId} />
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
  id?: string
  children: [
    ReactElement<LabelProps, typeof Label>,
    ReactElement<InnerInputCommonProps, typeof Text | typeof Number>
  ]
}

export const Input = ({ id, children }: InputCoreProps) => {
  const [Label, Input] = children

  const relationId = id ?? useNanoId()

  const shareState = useShareState({ relationId }, [])

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
