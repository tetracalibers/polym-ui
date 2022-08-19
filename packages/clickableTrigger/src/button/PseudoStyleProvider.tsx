/* eslint-disable react/display-name */
import { ReactElement } from 'react'
import styled, { css, isStyledComponent } from 'styled-components'
import {
  CssPropsCategory,
  CssPropsTypeFactory,
  Pseudo,
  provideCssProps,
} from 'styled-utility-first'

type PresenterProps = {
  pseudo: Pseudo
  children: ReactElement
}

const usePseudoStyleContext =
  (cssCategory: CssPropsCategory) =>
  ({
    pseudo,
    children,
  }: PresenterProps &
    CssPropsTypeFactory<typeof cssCategory>): ReactElement => {
    const StyledChild = isStyledComponent(children)
      ? children
      : styled(() => children)``

    const pseudoCss = css`
      ${provideCssProps.as(cssCategory)}
    `

    // prettier-ignore
    const StyledChildWithPseudoStyle = styled(StyledChild)`
      &:${pseudo} {
        ${pseudoCss}
      }
    `

    return (
      <StyledChildWithPseudoStyle>
        {children.props.children}
      </StyledChildWithPseudoStyle>
    )
  }

export default usePseudoStyleContext
