import { ComponentStory } from '@storybook/react'
import LoremIpsum from 'react-lorem-ipsum'
import { ScrollTrigger } from '..'
import { NeedScrollPage, NeedScrollPage400vh } from '../../../mock/TestBox'
import { Button } from '../../core/Button/core'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'

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

const Template: ComponentStory<typeof ScrollTrigger> = ({ ...args }) => (
  <VerticalStack separateFrom={1} as={NeedScrollPage}>
    <LoremIpsum />
    <ScrollTrigger {...args}>
      <Button.ToFillGradient>Page Top</Button.ToFillGradient>
    </ScrollTrigger>
  </VerticalStack>
)

export const playground = Template.bind({})
playground.args = {}
