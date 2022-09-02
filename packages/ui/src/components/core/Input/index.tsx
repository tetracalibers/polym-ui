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

type InputState = {
  relationId: string
}

const InputContext = createContext<InputState>({} as InputState)

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

type InnerInputCommonProps = {
  ref?: ForwardedRef<HTMLInputElement>
} & Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type' | 'id'>

const Text = forwardRef(({ ref, ...props }: InnerInputCommonProps) => {
  const { relationId } = useContext(InputContext)

  return <input type='text' {...props} ref={ref} id={relationId} />
})

/* -------------------------------------------- */

export type InputCoreProps = {
  id?: string
  children: [
    ReactElement<LabelProps, typeof Label>,
    ReactElement<InnerInputCommonProps, typeof Text>
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
