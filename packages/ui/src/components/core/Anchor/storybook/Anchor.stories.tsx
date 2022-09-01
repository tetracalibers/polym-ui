import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultAnchorCoreProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Anchor } from '..'

export default {
  title: 'core/Anchor',
  component: Anchor,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Component that wraps the "a" tag in HTML',
      },
    },
  },
  argTypes: {
    ...coreArgTypes,
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
  ...defaultAnchorCoreProps,
  children: 'Correct Usage',
  href: 'https://tetracalibers.notion.site/tomixy-TetraCalibers-30b94fb9fc054d4da667539ef35f42c6',
}

export const violationUsage01 = Template.bind({})
violationUsage01.args = {
  ...defaultAnchorCoreProps,
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

export const violationUsage02 = Template.bind({})
violationUsage02.args = {
  ...defaultAnchorCoreProps,
  children: <div>Examples of Violations</div>,
  href: 'javascript:void(0)',
}
violationUsage02.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}
