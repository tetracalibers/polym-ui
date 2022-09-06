import { ComponentStory } from '@storybook/react'
import { thisArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from '../../../core/Button/storybook/docsPage'
import { DripClick } from '..'
import { defaultButtonCoreProps } from '../../../core/Button/model/props'
import { buttonArgTypes } from '../../../core/Button/storybook/button/argTypes'

export default {
  title: 'button & link/DripClick/DripClick.Button',
  component: DripClick,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    ...buttonArgTypes,
    ...thisArgTypes,
  },
}

const Template: ComponentStory<typeof DripClick.Button> = ({
  children,
  ...args
}) => <DripClick.Button {...args}>{children}</DripClick.Button>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  ...defaultButtonCoreProps,
  children: 'Correct Usage',
}
