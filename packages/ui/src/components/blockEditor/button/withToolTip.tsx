import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import { PositionManager } from '../styled/tooltip'

type TooltipProps = {
  tip: ReactNode
}

export const withToolTip = <Props,>(MainComponent: ElementType) => {
  return forwardRef(({ tip, ...props }: TooltipProps & Props) => {
    const [visible, changeVisibleState] = useState(false)
    const show = () => changeVisibleState(true)
    const hide = () => changeVisibleState(false)

    return (
      <PositionManager data-visible={visible}>
        <div>
          <MainComponent
            {...props}
            onMouseEnter={show}
            onMouseLeave={hide}
            onTouchStart={show}
            onBlur={hide}
          />
        </div>
        {visible && tip}
      </PositionManager>
    )
  })
}
