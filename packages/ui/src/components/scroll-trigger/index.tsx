import { cloneElement, ReactElement } from 'react'
import styled from 'styled-components'
import { AsFromProps, defaultAsFromProps } from './model/props'
import { Fixed } from './styled/asFrom'

export type ScrollTriggerProps = {
  children: ReactElement<any, 'button'>
}

export const ScrollTrigger = ({ children }: ScrollTriggerProps) => {
  const goTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
    children.props.onClick && children.props.onClick()
  }

  const TriggerButton = cloneElement(children, { onClick: goTop })

  return <>{TriggerButton}</>
}

/* 指定の高さを超えたら出現 ------------------------------- */

export type ScrollTriggerAsFromProps = ScrollTriggerProps & AsFromProps

const getAsFrom = (CoreComponent: typeof ScrollTrigger) => {
  return ({
    children,
    startHeightV = defaultAsFromProps.startHeightV,
    startHeightU = defaultAsFromProps.startHeightU,
    appearFrom = defaultAsFromProps.appearFrom,
  }: ScrollTriggerAsFromProps) => {
    return (
      <CoreComponent>
        <Fixed>{children}</Fixed>
      </CoreComponent>
    )
  }
}

ScrollTrigger.AsFrom = getAsFrom(ScrollTrigger)

/* 範囲内でのみ出現 ----------------------------------- */

const InRange = () => {}
