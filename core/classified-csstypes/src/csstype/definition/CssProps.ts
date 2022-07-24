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