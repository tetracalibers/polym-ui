export type FormatArgs = {
  link: {
    url: string // input
    label: string // input
    boxType: 'inline' | 'block' // select
  }
  image: {
    url: string // upload
    caption?: string // input
  }
  code: {
    lang: 'js' | 'ts' | 'html' | 'css' // select
    input: string // textarea
    boxType: 'inline' | 'block' // select
  }
  keyboard: {
    items: string[] // textarea
  }
  marker: {
    input: string // textarea
  }
  info: {
    input: string // textarea
  }
  alert: {
    input: string // textarea
  }
  toggle: {
    summary: string // input
    input: string // textarea
  }
  ulist: {
    items: string[] // input
  }
  olist: {
    items: string[]
    order: number
  }
  separator: {}
  heading: {
    level: 1 | 2 | 3 | 4 | 5 | 6 // select
    input: string // input
  }
  paragraph: {
    input: string // textarea
    boxType: 'inline' | 'block' // select
  }
  blockquote: {
    input: string // 引用文 // textarea
    cite?: string // 出典 // input
    boxType: 'inline' | 'block' // select
  }
  formula: {
    input: string // textarea
    boxType: 'inline' | 'block' // select
  }
  terminal: {
    input: string // textarea
  }
}