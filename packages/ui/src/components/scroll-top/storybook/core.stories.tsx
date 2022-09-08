import { ComponentStory } from '@storybook/react'
import LoremIpsum from 'react-lorem-ipsum'
import { ScrollTop } from '..'
import { NeedScrollPage, NeedScrollPage400vh } from '../../../mock/TestBox'
import { Button } from '../../core/Button/core'
import { CenterLineHeading } from '../../heading/CenterLine'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { Text } from '../../Text'

export default {
  title: 'scroll/ScrollTop',
  component: ScrollTop,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "button" tag in HTML',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof ScrollTop> = ({ ...args }) => (
  <VerticalStack separateFrom={2} as={NeedScrollPage}>
    <CenterLineHeading>Scroll down to see the button.</CenterLineHeading>
    <LoremIpsum />
    <ScrollTop {...args}>
      <Button.ToFillGradient>Page Top</Button.ToFillGradient>
    </ScrollTop>
  </VerticalStack>
)

export const normal = Template.bind({})
normal.args = {}
