import { ComponentStory } from '@storybook/react'
import { thisArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { IconClick } from '..'
import { DocsPage } from '../../../core/Button/storybook/docsPage'
import { ImTwitter } from 'react-icons/im'

export default {
  title: 'button & link/IconClick/IconClick.Button',
  component: IconClick,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...thisArgTypes,
  },
}

const Template: ComponentStory<typeof IconClick.Button> = () => (
  <IconClick.Button icon={<ImTwitter />} label='go to Twitter' />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
