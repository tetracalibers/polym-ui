import { ElementType, forwardRef, ReactNode, useState } from 'react'

type TooltipProps = {
  tip: ReactNode
}

export const withToolTip = <Props,>(MainComponent: ElementType) => {
  return forwardRef(({ tip, ...props }: TooltipProps & Props) => {
    const [visible, changeVisibleState] = useState(false)
    const show = () => changeVisibleState(true)
    const hide = () => changeVisibleState(false)

    return (
      <>
        <MainComponent
          {...props}
          onMouseEnter={show}
          onMouseLeave={hide}
          onTouchStart={show}
          onFocus={show}
          onBlur={hide}
        />
        {visible && tip}
      </>
    )
  })
}
