import { ComponentStory } from '@storybook/react'
import { ScaleImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../../assets/myproduct.jpg'

export default {
  title: 'image/ScaleImage',
  component: ScaleImage,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Child elements of the element specified by as props',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...logicArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof ScaleImage> = ({ src, ...args }) => (
  <ScaleImage {...args} src={sample01} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
