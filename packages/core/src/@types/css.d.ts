// My css.d.ts file
import type * as CSS from 'csstype';

declare module 'csstype' {
  export interface Properties {
    // Add a missing property
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
    
    // TODO mixin
    //borderX: CSS.Property.BorderLeft & CSS.Property.BorderRight
    //borderY: CSS.Property.BorderTop & CSS.Property.BorderBottom
    
    // TODO mixin
    //borderTopRadius: CSS.Property.BorderTopLeftRadius & CSS.Property.BorderTopRightRadius
    //borderRightRadius: CSS.Property.BorderTopRightRadius & CSS.Property.BorderBottomRightRadius
    //borderBottomRadius: CSS.Property.BorderBottomRightRadius & CSS.Property.BorderBottomLeftRadius
    //borderLeftRadius: CSS.Property.BorderBottomLeftRadius & CSS.Property.BorderTopLeftRadius
    
    pos: CSS.Property.Position
    
    // TODO mixin
    // blur: 
    // brightness:
    // contrast:
    // hueRotate:
    // invert
    // saturate
    // dropShadow
    // backdropBlur: 
    // backdropBrightness:
    // backdropContrast:
    // backdropHueRotate:
    // backdropInvert
    // backdropSaturate
        
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
    
    // TODO mixin
    // mx: 
    // my: 
    // px:
    // py:

    // Add a CSS Custom Property
    //'--theme-color'?: 'black' | 'white';

    // ...or allow any other property
    //[index: string]: any;
  }
  
  export interface AtRule {
    at_counterStyle: CSS.AtRule.CounterStyle
    at_fontFace: CSS.AtRule.FontFace
    at_viewport: CSS.AtRule.Viewport
  }
}

// TODO Pseudo