import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { SlideFillClick } from '..'
import { coreArgTypes } from '../../../core/Anchor/model/argTypes'
import { defaultAnchorCoreProps } from '../../../core/Anchor/model/props'

export default {
  title: 'button & link/SlideFillClick/Anchor',
  component: SlideFillClick,
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

const Template: ComponentStory<typeof SlideFillClick.Anchor> = ({
  children,
  ...args
}) => <SlideFillClick.Anchor {...args}>{children}</SlideFillClick.Anchor>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  ...defaultAnchorCoreProps,
  children: 'Correct Usage',
}
