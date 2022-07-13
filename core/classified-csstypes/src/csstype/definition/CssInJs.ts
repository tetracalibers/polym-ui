import type * as CSS from 'csstype'
import type { AmpersandSingleColonPseudoes } from '../gen/ampersand-selector/ampersandSingleColonPseudoes'
import type { AmpersandDoubleColonPseudoes } from '../gen/ampersand-selector/ampersandDoubleColonPseudoes'

export type CssInJs =
  | CSS.PropertiesFallback
  | CSS.PropertiesHyphenFallback
  | {
      [P in CSS.SimplePseudos]?:
        | CSS.PropertiesFallback
        | CSS.PropertiesHyphenFallback
    }
  | {
      '&': CSS.PropertiesFallback | CSS.PropertiesHyphenFallback
    }
  | {
      [P in AmpersandDoubleColonPseudoes]?:
        | CSS.PropertiesFallback
        | CSS.PropertiesHyphenFallback
    }
  | {
      [P in AmpersandSingleColonPseudoes]?:
        | CSS.PropertiesFallback
        | CSS.PropertiesHyphenFallback
    }
