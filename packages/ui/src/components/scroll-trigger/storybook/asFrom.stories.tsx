import { ComponentStory } from '@storybook/react'
import LoremIpsum from 'react-lorem-ipsum'
import { ScrollTrigger } from '..'
import { NeedScrollPage, NeedScrollPage400vh } from '../../../mock/TestBox'
import { CircleIconClick } from '../../button/CircleIcon'
import { Button } from '../../core/Button/core'
import { CenterLineHeading } from '../../heading/CenterLine'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { Text } from '../../Text'
import { GrLinkTop } from 'react-icons/gr'

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
      <CircleIconClick.Button icon={<GrLinkTop />} label='go to page top' />
    </ScrollTrigger.AsFrom>
  </VerticalStack>
)

export const asFrom = Template.bind({})
asFrom.args = {}
