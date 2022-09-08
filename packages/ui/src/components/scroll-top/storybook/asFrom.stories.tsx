import { ComponentStory } from '@storybook/react'
import LoremIpsum from 'react-lorem-ipsum'
import { ScrollTop } from '..'
import { NeedScrollPage } from '../../../mock/TestBox'
import { CircleIconClick } from '../../button/CircleIcon'
import { CenterLineHeading } from '../../heading/CenterLine'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'
import { GrLinkTop } from 'react-icons/gr'
import { asFromArgTypes } from './argTypes'
import { defaultAsFromProps } from '../model/props'

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
  argTypes: {
    ...asFromArgTypes,
  },
}

const Template: ComponentStory<typeof ScrollTop.AsFrom> = ({ ...args }) => (
  <VerticalStack separateFrom={2} as={NeedScrollPage}>
    <CenterLineHeading>Scroll down to see the button.</CenterLineHeading>
    <LoremIpsum />
    <ScrollTop.AsFrom {...args}>
      <CircleIconClick.Button icon={<GrLinkTop />} label='go to page top' />
    </ScrollTop.AsFrom>
  </VerticalStack>
)

export const asFrom = Template.bind({})
asFrom.args = {
  ...defaultAsFromProps,
}
