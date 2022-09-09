export type SubMenu = {
  type: 'sub'
  title: string
  url: string
}

export type Menu = {
  type: 'root'
  title: string
  url: string
  subMenu: SubMenu[]
}
