import type * as CSS from 'csstype'

export interface CssShortcutProperties {
  w: CSS.Property.Width
  h: CSS.Property.Height
  minW: CSS.Property.MinWidth
  minH: CSS.Property.MinHeight
  
  bg: CSS.Property.Background
  bgColor: CSS.Property.BackgroundColor
  bgGradient: CSS.Property.BackgroundImage
  bgClip: CSS.Property.BackgroundClip
  bgImage: CSS.Property.BackgroundImage
  bgSize: CSS.Property.BackgroundSize
  bgPosition: CSS.Property.BackgroundPosition
  bgRepeat: CSS.Property.BackgroundRepeat
  bgAttachment: CSS.Property.Background
  
  pos: CSS.Property.Position
  
  m: CSS.Property.Margin
  mt: CSS.Property.MarginTop
  mr: CSS.Property.MarginRight
  mb: CSS.Property.MarginBottom
  ml: CSS.Property.MarginLeft
  
  p: CSS.Property.Padding
  pt: CSS.Property.PaddingTop
  pr: CSS.Property.PaddingRight
  pb: CSS.Property.PaddingBottom
  pl: CSS.Property.PaddingLeft
}

export interface CssAtRules {
  at_counterStyle: CSS.AtRule.CounterStyle
  at_fontFace: CSS.AtRule.FontFace
  at_viewport: CSS.AtRule.Viewport
}

export type StylingProps = {
  
}