type AsProp<C extends import('react').ElementType> = {
  as: C
}

type PropsToOmit<C extends import('react').ElementType, P> = keyof (AsProp<C> &
  P)

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  C extends import('react').ElementType,
  Props = {}
> = import('react').PropsWithChildren<Props & AsProp<C>> &
  Omit<
    import('react').ComponentPropsWithoutRef<
      C extends import('styled-components').AnyStyledComponent
        ? import('styled-components').StyledComponentInnerComponent<C>
        : C
    >,
    PropsToOmit<C, Props>
  >
