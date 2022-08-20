import { css } from 'styled-components'
import { ButtonSubstyleProps, substyleDefaultProps } from './props'

export const buttonSubStyle = css<ButtonSubstyleProps>`
  padding: ${({ padding }) => padding || substyleDefaultProps.padding};
  border-radius: ${({ borderRadius }) =>
    borderRadius || substyleDefaultProps.borderRadius};
`
