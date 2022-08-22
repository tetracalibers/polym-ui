import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { StyledComponent } from 'styled-components'
import { TagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { getStyledElement, StyledElement } from './styled'

export type WillFadeProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

export const WillFade = <As extends TagType>(
  { as, ...props }: WillFadeProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  //const StyledElement: StyledComponent<TagType, {}> = getStyledElement(as)
  return (
    <StyledElement as={as} {...props} {...attrs}>
      {props.children}
    </StyledElement>
  )
}
