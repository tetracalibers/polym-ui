import type * as CSS from 'csstype'

/* For both use ------------------------------------------------------------- */

export type CssPositionProps = {
  position: CSS.Property.Position
  top: CSS.Property.Top
  bottom: CSS.Property.Bottom
  left: CSS.Property.Left
  right: CSS.Property.Right
}

export type CssFloatProps = {
  clear: CSS.Property.Clear
  float: CSS.Property.Float
}

export type CssLayerProps = {
  zIndex: CSS.Property.ZIndex
}

export type CssBlendingProps = {
  backgroundBlendMode: CSS.Property.BackgroundBlendMode
  isolation: CSS.Property.Isolation
  mixBlendMode: CSS.Property.MixBlendMode
}

export type CssFilterProps = {
  backdropFilter: CSS.Property.BackdropFilter
  filter: CSS.Property.Filter
}

export type CssPointerEventsProps = {
  touchAction: CSS.Property.TouchAction
}

/* For text itself or a child element of block ------------------------------ */

export type CssColorProps = {
  color: CSS.Property.Color
  opacity: CSS.Property.Opacity
}

export type CssFontProps = {
  fontFamily: CSS.Property.FontFamily
  fontFeatureSettings: CSS.Property.FontFeatureSettings
  fontSize: CSS.Property.FontSize
  fontStretch: CSS.Property.FontStretch
  fontStyle: CSS.Property.FontStyle
  fontSynthesis: CSS.Property.FontSynthesis
  fontVariantEastAsian: CSS.Property.FontVariantEastAsian
  fontVariantLigatures: CSS.Property.FontVariantLigatures
  fontVariantNumeric: CSS.Property.FontVariantNumeric
  fontWeight: CSS.Property.FontWeight
}

export type CssTextProps = {
  lineHeight: CSS.Property.LineHeight
  hyphens: CSS.Property.Hyphens
  letterSpacing: CSS.Property.LetterSpacing
  lineBreak: CSS.Property.LineBreak
  overflowWrap: CSS.Property.OverflowWrap
  tabSize: CSS.Property.TabSize
  textAlign: CSS.Property.TextAlign
  textAlignLast: CSS.Property.TextAlignLast
  textIndent: CSS.Property.TextIndent
  textTransform: CSS.Property.TextTransform
  whiteSpace: CSS.Property.WhiteSpace
  wordBreak: CSS.Property.WordBreak
  wordSpacing: CSS.Property.WordSpacing
}

export type CssTextDecorationProps = {
  textDecorationColor: CSS.Property.TextDecorationColor
  textDecorationLine: CSS.Property.TextDecorationLine
  textDecorationSkipInk: CSS.Property.TextDecorationSkipInk
  textDecorationStyle: CSS.Property.TextDecorationStyle
  textDecorationThickness: CSS.Property.TextDecorationThickness
  textUnderlineOffset: CSS.Property.TextUnderlineOffset
  textUnderlinePosition: CSS.Property.TextUnderlinePosition
}

export type CssTextEmphasisProps = {
  textEmphasisColor: CSS.Property.TextEmphasisColor
  textEmphasisPosition: CSS.Property.TextEmphasisPosition
  textEmphasisStyle: CSS.Property.TextEmphasisStyle
}

export type CssTextShadowProps = {
  textShadow: CSS.Property.TextShadow
}

/* for layout --------------------------------------------------------------- */
