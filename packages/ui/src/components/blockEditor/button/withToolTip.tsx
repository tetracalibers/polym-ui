import { ElementType, forwardRef, ReactNode } from 'react'
import { PositionManager } from '../styled/tooltip'

type TooltipProps = {
  tip: ReactNode
}

export const withToolTip = <Props,>(MainComponent: ElementType) => {
  return forwardRef(({ tip, ...props }: TooltipProps & Props) => {
    return (
      <PositionManager>
        <div onTouchStart={() => ''}>
          <MainComponent {...props} />
        </div>
        {tip}
      </PositionManager>
    )
  })
}
