import { ComponentStory } from '@storybook/react'
import { DocsPage } from '../../../core/Heading/storybook/docsPage'
import { CenterLineHeading } from '..'
import { coreArgTypes } from '../../../core/Heading/model/argTypes'
import { defaultHeadingCoreProps } from '../../../core/Heading/model/props'
import { defaultProps } from '../model/props'
import { thisArgTypes } from '../model/argTypes'

export default {
  title: 'readable content/CenterLineHeading',
  component: CenterLineHeading,
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

const Template: ComponentStory<typeof CenterLineHeading> = ({
  children,
  ...args
}) => <CenterLineHeading {...args}>{children}</CenterLineHeading>

export const playground = Template.bind({})
playground.args = {
  ...defaultHeadingCoreProps,
  ...defaultProps,
  children: 'Correct Usage',
}
