import { INode } from '../core/DataType'

export const mockData: INode[] = [
  {
    type: 'node',
    name: 'My Projects',
    items: [
      {
        type: 'node',
        name: 'Projects',
        items: [
          { type: 'leaf', name: 'project-1.docx' },
          { type: 'leaf', name: 'project-2.docx' },
          {
            type: 'node',
            name: 'Project 3',
            items: [
              { type: 'leaf', name: 'project-3A.docx' },
              { type: 'leaf', name: 'project-3B.docx' },
              { type: 'leaf', name: 'project-3C.docx' },
            ],
          },
          { type: 'leaf', name: 'project-4.docx' },
          {
            type: 'node',
            name: 'Project 5',
            items: [
              { type: 'leaf', name: 'project-5A.docx' },
              { type: 'leaf', name: 'project-5B.docx' },
              { type: 'leaf', name: 'project-5C.docx' },
              { type: 'leaf', name: 'project-5D.docx' },
              { type: 'leaf', name: 'project-5E.docx' },
              { type: 'leaf', name: 'project-5F.docx' },
            ],
          },
        ],
      },
      {
        type: 'node',
        name: 'Reports',
        items: [
          {
            type: 'node',
            name: 'report-1',
            items: [
              { type: 'leaf', name: 'project-1A.docx' },
              { type: 'leaf', name: 'project-1B.docx' },
              { type: 'leaf', name: 'project-1C.docx' },
            ],
          },
          {
            type: 'node',
            name: 'report-2',
            items: [
              { type: 'leaf', name: 'project-2A.docx' },
              { type: 'leaf', name: 'project-2B.docx' },
              { type: 'leaf', name: 'project-2C.docx' },
              { type: 'leaf', name: 'project-2D.docx' },
            ],
          },
          {
            type: 'node',
            name: 'report-3',
            items: [
              { type: 'leaf', name: 'project-3A.docx' },
              { type: 'leaf', name: 'project-3B.docx' },
            ],
          },
        ],
      },
    ],
  },
]
