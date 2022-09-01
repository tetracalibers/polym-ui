import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Anchor } from '..'

export default {
  title: 'core/Anchor',
  component: Anchor,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
  },
}

const Template: ComponentStory<typeof Anchor> = ({
  children,
  href,
  ...args
}) => (
  <Anchor href={href} {...args}>
    {children}
  </Anchor>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Correct Usage',
  href: 'https://tetracalibers.notion.site/tomixy-TetraCalibers-30b94fb9fc054d4da667539ef35f42c6',
}

export const violationUsage01 = Template.bind({})
violationUsage01.args = {
  ...defaultProps,
  children: <div tabIndex={0}>Examples of Violations</div>,
  href: 'https://tetracalibers.notion.site/tomixy-TetraCalibers-30b94fb9fc054d4da667539ef35f42c6',
}
violationUsage01.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}
