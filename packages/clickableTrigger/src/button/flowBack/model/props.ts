export type FromFourSidedProps = {
  /* default: 'left' ---------------------------- */
  from: 'left' | 'right' | 'top' | 'bottom'
  /* -------------------------------------------- */
  orientation?: never
  diagonal?: never
}

export type FromCenterProps = {
  from: 'center'
  /* default: 'horizontal' ---------------------- */
  orientation: 'vertical' | 'horizontal' | 'corner'
  /* -------------------------------------------- */
  diagonal?: never
}

export type DiagonalProps = {
  /* default: true ------------------------------ */
  diagonal: boolean
  /* -------------------------------------------- */
  from?: never
  orientation?: never
}

export type Props = FromFourSidedProps | FromCenterProps | DiagonalProps
