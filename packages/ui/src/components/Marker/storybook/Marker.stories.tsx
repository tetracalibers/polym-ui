import { ComponentStory } from '@storybook/react'
import { Marker } from '..'
import { Text } from '../../Text'
import { defaultMarkerCoreProps } from '../model/props'

export default {
  title: 'contents/Marker',
  component: Marker,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Marker> = ({ ...args }) => (
  <Text>
    The quick, brown fox <Marker {...args}>jumps over a lazy dog</Marker>. DJs
    flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
  </Text>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultMarkerCoreProps,
}
