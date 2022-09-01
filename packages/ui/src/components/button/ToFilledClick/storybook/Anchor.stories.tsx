import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { ToFilledClick } from '..'
import { coreArgTypes } from '../../../core/Anchor/model/argTypes'
import { defaultAnchorCoreProps } from '../../../core/Anchor/model/props'

export default {
  title: 'button & link/ToFilledClick/Anchor',
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

const Template: ComponentStory<typeof ToFilledClick.Anchor> = ({
  children,
  ...args
}) => <ToFilledClick.Anchor {...args}>{children}</ToFilledClick.Anchor>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  ...defaultAnchorCoreProps,
  children: 'Correct Usage',
}
