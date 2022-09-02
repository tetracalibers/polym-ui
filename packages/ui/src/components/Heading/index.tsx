import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { CoreProps, defaultHeadingCoreProps } from './model/props'
import { Inner, SemanticHeading, STyledHeading } from './styled'

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
      <STyledHeading {...props} ref={ref} as={Tag}>
        <Inner>{children}</Inner>
      </STyledHeading>
    </ThemeProvider>
  )
}

export const Heading = forwardRef(HeadingInner)
