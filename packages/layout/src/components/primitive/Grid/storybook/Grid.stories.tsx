import { ComponentStory } from '@storybook/react'
import { Grid } from '..'
import { commmonArgTypes } from '../../../../common/argTypes'
import { Container, GridChild } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/Grid',
  component: Grid,
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
      description: 'Elements to be placed in a grid',
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

const Template: ComponentStory<typeof Grid> = ({ children, ...args }) => (
  <Grid {...args} as={Container}>
    {[...new Array(10)].map((_, idx) => {
      return <GridChild key={idx}>{idx + 1}th Card!!</GridChild>
    })}
  </Grid>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
