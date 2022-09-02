import { ComponentStory } from '@storybook/react'
import { DocsPage } from '../../../core/Heading/storybook/docsPage'
import { UnderLineHeading } from '..'
import { coreArgTypes } from '../../../core/Heading/model/argTypes'
import { defaultHeadingCoreProps } from '../../../core/Heading/model/props'
import { defaultProps } from '../model/props'
import { thisArgTypes } from '../model/argTypes'

export default {
  title: 'Heading Decoration/UnderLineHeading',
  component: UnderLineHeading,
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

const Template: ComponentStory<typeof UnderLineHeading> = ({
  children,
  ...args
}) => <UnderLineHeading {...args}>{children}</UnderLineHeading>

export const playground = Template.bind({})
playground.args = {
  ...defaultHeadingCoreProps,
  ...defaultProps,
  children: 'Correct Usage',
}
