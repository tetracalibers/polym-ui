import { ComponentStory } from '@storybook/react'
import { thisArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from '../../../core/Anchor/storybook/docsPage'
import { SlideFillClick } from '..'
import { coreArgTypes } from '../../../core/Anchor/model/argTypes'
import { defaultAnchorCoreProps } from '../../../core/Anchor/model/props'

export default {
  title: 'button & link/SlideFillClick/SlideFillClick.Anchor',
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
    ...thisArgTypes,
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
