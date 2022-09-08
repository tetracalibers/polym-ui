import { ComponentStory } from '@storybook/react'
import LoremIpsum from 'react-lorem-ipsum'
import { ScrollTrigger } from '..'
import { NeedScrollPage, NeedScrollPage400vh } from '../../../mock/TestBox'
import { Button } from '../../core/Button/core'
import { CenterLineHeading } from '../../heading/CenterLine'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { Text } from '../../Text'

export default {
  title: 'scroll/ScrollTrigger',
  component: ScrollTrigger,
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

const Template: ComponentStory<typeof ScrollTrigger.AsFrom> = ({ ...args }) => (
  <VerticalStack separateFrom={2} as={NeedScrollPage}>
    <CenterLineHeading>Scroll down to see the button.</CenterLineHeading>
    <LoremIpsum />
    <ScrollTrigger.AsFrom {...args}>
      <Button.ToFillGradient>Page Top</Button.ToFillGradient>
    </ScrollTrigger.AsFrom>
  </VerticalStack>
)

export const asFrom = Template.bind({})
asFrom.args = {}
