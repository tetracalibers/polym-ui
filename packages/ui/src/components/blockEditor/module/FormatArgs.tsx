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
    keyNames: string[] // textarea
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
  command: {
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
    items: {
      order: number // input
      item: string // input
    }[]
  }
  separator: {}
  heading: {
    level: number // select
    text: string // input
  }
  paragraph: {
    input: string // textarea
    boxType: 'inline' | 'block' // select
  }
  blockquote: {
    input: string // 引用文 // textarea
    from?: string // 出典 // input
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
