import { ComponentStory } from '@storybook/react'
import { thisArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from '../../../core/Button/storybook/docsPage'
import { SlideFillClick } from '..'
import { coreArgTypes } from '../../../core/Button/storybook/argTypes'
import { defaultButtonCoreProps } from '../../../core/Button/model/props'

export default {
  title: 'button & link/SlideFillClick/SlideFillClick.Button',
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

const Template: ComponentStory<typeof SlideFillClick.Button> = ({
  children,
  ...args
}) => <SlideFillClick.Button {...args}>{children}</SlideFillClick.Button>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  ...defaultButtonCoreProps,
  children: 'Correct Usage',
}
