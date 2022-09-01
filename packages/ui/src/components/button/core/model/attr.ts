export type SpecificAttr = {
  a: Omit<HTMLAnchorElement, keyof HTMLButtonElement>
  button: Omit<HTMLButtonElement, keyof HTMLAnchorElement>
}
