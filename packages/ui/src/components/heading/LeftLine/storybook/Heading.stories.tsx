import { ComponentStory } from '@storybook/react'
import { DocsPage } from '../../../core/Heading/storybook/docsPage'
import { LeftLineHeading } from '..'
import { coreArgTypes } from '../../../core/Heading/model/argTypes'
import { defaultHeadingCoreProps } from '../../../core/Heading/model/props'
import { defaultProps } from '../model/props'
import { thisArgTypes } from '../model/argTypes'

export default {
  title: 'Heading Decoration/LeftLineHeading',
  component: LeftLineHeading,
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

const Template: ComponentStory<typeof LeftLineHeading> = ({
  children,
  ...args
}) => <LeftLineHeading {...args}>{children}</LeftLineHeading>

export const playground = Template.bind({})
playground.args = {
  ...defaultHeadingCoreProps,
  ...defaultProps,
  children: 'Correct Usage',
}
