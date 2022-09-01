import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { ToFilledClick } from '..'
import { coreArgTypes } from '../../../core/Button/model/argTypes'

export default {
  title: 'button & link/ToFilledClick/Button',
  component: ToFilledClick,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...coreArgTypes,
    ...logicArgTypes,
  },
}

const Template: ComponentStory<typeof ToFilledClick.Button> = ({
  children,
  ...args
}) => <ToFilledClick.Button {...args}>{children}</ToFilledClick.Button>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Correct Usage',
}
