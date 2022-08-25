import { ComponentStory } from '@storybook/react'
import { WithIcon } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { CheckIcon, HeartIcon } from '@polym-ui/symbol'

export default {
  title: 'typography/WithIcon',
  component: WithIcon,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Child elements of the element specified by as props',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...logicArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof WithIcon> = ({ children, ...args }) => (
  <WithIcon {...args} as={DarkTextBox}>
    {children}
  </WithIcon>
)

export const prefixIcon = Template.bind({})
prefixIcon.args = {
  ...defaultProps,
  children: (
    <>
      <CheckIcon />I agree.
    </>
  ),
}

export const suffixIcon = Template.bind({})
suffixIcon.args = {
  ...defaultProps,
  children: (
    <>
      I Love You
      <HeartIcon />
    </>
  ),
}
