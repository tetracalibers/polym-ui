import { cloneElement, ReactElement } from 'react'

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
