import {
  ComponentPropsWithoutRef,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useContext,
} from 'react'
import { useRegisterId, useShareId, useShareState } from '@polym/hooks'
import { STyledInput } from './styled'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { defaultNumberInputProps, NumberInputProps } from './model/props'
import { Stepper } from './Stepper'

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

export type InnerInputCommonProps = {
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
/* EMAIL INPUT                                  */
/* -------------------------------------------- */

const _Email = ({ ref, id, ...props }: InnerInputCommonProps) => {
  const { inputId, updateInputId } = useContext(InputContext)
  useRegisterId(id, updateInputId)

  return (
    <STyledInput
      type='email'
      {...props}
      ref={ref}
      id={inputId}
      autoCapitalize='none'
      autoCorrect='off'
      spellCheck={false}
    />
  )
}

const Email = forwardRef(_Email)

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

  return stepper ? (
    <Stepper
      {...props}
      ref={ref}
      inputId={inputId!}
      labelId={labelId!}
      initNum={initNum}
    />
  ) : (
    <STyledInput type='number' {...props} ref={ref} id={inputId} />
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
Input.Email = Email
