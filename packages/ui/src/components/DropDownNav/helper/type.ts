export type SubMenu = {
  title: string
  url: string
}

export type Menu = {
  title: string
  url: string
  subMenus?: (SubMenu | Menu)[]
}

/* -------------------------------------------- */

export const mockData: Menu[] = [
  {
    title: 'Top',
    url: '#top',
  },
  {
    title: 'About',
    url: '#about',
  },
  {
    title: 'Service',
    url: '#service',
    subMenus: [
      {
        title: 'Service Top',
        url: '#service',
      },
      {
        title: 'Service01',
        url: '#service/01',
      },
      {
        title: 'Service02',
        url: '#service/02',
        subMenus: [
          {
            title: 'Service02 Top',
            url: '#service/02',
          },
          {
            title: 'Service02-A',
            url: '#service/02/A',
          },
          {
            title: 'Service02-B',
            url: '#service/02/B',
          },
          {
            title: 'Service02-C',
            url: '#service/02/C',
            subMenus: [
              {
                title: 'Service02-C-01',
                url: '#service/02/C/01',
              },
              {
                title: 'Service02-C-02',
                url: '#service/02/C/02',
              },
            ],
          },
          {
            title: 'Service02-D',
            url: '#service/02/D',
          },
        ],
      },
      {
        title: 'Service03',
        url: '#service/03',
      },
    ],
  },
  {
    title: 'Blog',
    url: '#blog',
    subMenus: [
      {
        title: 'Blog Top',
        url: '#blog',
      },
      {
        title: 'Blog01',
        url: '#blog/01',
      },
      {
        title: 'Blog02',
        url: '#blog/02',
      },
      {
        title: 'Blog03',
        url: '#blog/03',
      },
    ],
  },
]
