export type SubMenu = {
  type: 'leaf'
  title: string
  url: string
}

export type Menu = {
  type: 'node'
  title: string
  url: string
  subMenu?: (SubMenu | Menu)[]
}

/* -------------------------------------------- */

export const mockDate: Menu[] = [
  {
    type: 'node',
    title: 'Top',
    url: '#top',
  },
  {
    type: 'node',
    title: 'About',
    url: '#about',
  },
  {
    type: 'node',
    title: 'Service',
    url: '#service',
    subMenu: [
      {
        type: 'leaf',
        title: 'Service Top',
        url: '#service',
      },
      {
        type: 'leaf',
        title: 'Service01',
        url: '#service/01',
      },
      {
        type: 'node',
        title: 'Service02',
        url: '#service/02',
        subMenu: [
          {
            type: 'leaf',
            title: 'Service02 Top',
            url: '#service/02',
          },
          {
            type: 'leaf',
            title: 'Service02-A',
            url: '#service/02/A',
          },
          {
            type: 'leaf',
            title: 'Service02-B',
            url: '#service/02/B',
          },
          {
            type: 'leaf',
            title: 'Service02-C',
            url: '#service/02/C',
          },
          {
            type: 'leaf',
            title: 'Service02-D',
            url: '#service/02/D',
          },
        ],
      },
      {
        type: 'node',
        title: 'Blog',
        url: '#blog',
        subMenu: [
          {
            type: 'leaf',
            title: 'Blog Top',
            url: '#blog',
          },
          {
            type: 'leaf',
            title: 'Blog01',
            url: '#blog/01',
          },
          {
            type: 'leaf',
            title: 'Blog02',
            url: '#blog/02',
          },
          {
            type: 'leaf',
            title: 'Blog03',
            url: '#blog/03',
          },
        ],
      },
    ],
  },
]
