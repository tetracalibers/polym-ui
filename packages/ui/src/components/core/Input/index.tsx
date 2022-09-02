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

  return <input type='text' {...props} ref={ref} id={relationId} />
}
const Text = forwardRef(_Text)

/* -------------------------------------------- */
/* NUMBER INPUT                                 */
/* -------------------------------------------- */

const _Number = ({ ref, ...props }: InnerInputCommonProps) => {
  const { relationId } = useContext(InputContext)

  return <input type='number' {...props} ref={ref} id={relationId} />
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
      {Label}
      {Input}
    </InputContext.Provider>
  )
}

/* -------------------------------------------- */

Input.Label = Label
Input.Text = Text
Input.Number = Number
