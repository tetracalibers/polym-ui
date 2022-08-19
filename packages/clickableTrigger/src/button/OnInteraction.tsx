import React, { ReactElement } from 'react'
import { css } from 'styled-components'
import {
  CssPropsCategory,
  CssPropsTypeFactory,
  Pseudo,
} from 'styled-utility-first'

type InjectProps<CssAs extends CssPropsCategory> = {
  cssCategory: CssPropsCategory
  children: ReactElement
} & {
  [pseu in Pseudo]?: {
    [property in keyof CssPropsTypeFactory<CssAs>]: CssPropsTypeFactory<CssAs>[property]
  }
}

const OnInteraction = <K extends CssPropsCategory>({
  cssCategory,
  children,
  ...pseudoesStyle
}: InjectProps<K>): ReactElement<
  Omit<InjectProps<K>, 'cssCategory' | 'pseudo'>
> => {
  const pseudoCss = Object.entries(pseudoesStyle).map(pseudoStyle => {
    const [selector, ruleset] = pseudoStyle
    const rulesetCss = Object.entries(ruleset)
      .map(rule => {
        const [pname, pvalue] = rule
        return `${pname}: ${pvalue};`
      })
      .join('\n')

    // prettier-ignore
    return css<CssPropsTypeFactory<K>>`
      &:${selector} {
        ${rulesetCss}
      }
    `
  })

  const newChildren = React.cloneElement(children, {
    className: pseudoCss,
  })

  return newChildren
}

export default OnInteraction
