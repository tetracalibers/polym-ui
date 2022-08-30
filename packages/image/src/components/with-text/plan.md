# structure

```memo
<TextOver??Image
    overText={<span>sample text</span>}
    {...props}
/>
```

# props

## common props

- **overText** ReactNode
- **imgPadding** 画像と背景の隙間
- **duration**
- **trigger**

## TxtOverMotionImage

- **motion**
  - slideUp
  - slideDown
  - slideLtoR
  - slideRtoL
  - spreadH
  - spreadV
  - flipX
  - flipY
  - flipZtoLeftTop
  - flipZtoRightTop
- **bgColor**

## TxtOverBlurImage

- **bgColor**
- **blurRadius**
- **withZoom**
- **zoom**
  - in
  - out

## TxtOverGradationImage

- **gradationFrom**
- **gradationTo**
- **gradationSlope** 45deg
- **imgOpacity**

## TxtOverBorderImage

- **borderColor**
