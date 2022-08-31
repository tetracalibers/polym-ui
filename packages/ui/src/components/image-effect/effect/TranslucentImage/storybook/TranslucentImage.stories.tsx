import { ComponentStory } from '@storybook/react'
import { TranslucentImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../../assets/sakura.jpg'
import { effectArgTypes } from '../../model/argTypes'

export default {
  title: 'image effect/TranslucentImage',
  component: TranslucentImage,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
    ...effectArgTypes,
    ...commmonArgTypes,
  },
}

const Template: ComponentStory<typeof TranslucentImage> = ({
  src,
  ...args
}) => <TranslucentImage {...args} src={sample01} />

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
