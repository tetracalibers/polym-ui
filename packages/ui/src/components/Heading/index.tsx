import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { CoreProps, defaultHeadingCoreProps } from './model/props'
import { StyledHeading } from './styled'

export type HeadingProps = {
  ref?: ForwardedRef<HTMLHeadingElement>
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'h1'>, 'children'> &
  CoreProps

export type HeadingComponent = (props: HeadingProps) => ReactElement | null

const HeadingInner = ({
  children,
  ref,
  level = defaultHeadingCoreProps.level,
  ...props
}: HeadingProps) => {
  const Tag = ('h' + level) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <ThemeProvider theme={{ level }}>
      <StyledHeading {...props} ref={ref} as={Tag}>
        {children}
      </StyledHeading>
    </ThemeProvider>
  )
}

export const Heading = forwardRef(HeadingInner)
