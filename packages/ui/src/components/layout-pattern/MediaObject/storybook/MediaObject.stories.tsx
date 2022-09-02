import { ComponentStory } from '@storybook/react'
import { MediaObject } from '..'
import { commmonArgTypes } from '../../../../types/argTypes'
import { DarkTextBox } from '../../../../mock/TestBox'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { ScaleImage } from '../../../image-effect/effect/ScaleImage'
import LoremIpsum from 'react-lorem-ipsum'
// @ts-ignore
import nightImage from '../../../../assets/night.jpg'
// @ts-ignore
import catImage from '../../../../assets/cat.jpg'
import { Heading } from '../../../core/Heading'
import { VerticalStack } from '../../../layout-algorithm/VerticalStack'
import { BlurImage } from '../../../image-effect/effect/BlurImage'
import { ShineImage } from '../../../image-effect/animation/ShineImage'

export default {
  title: 'layout pettern/MediaObject',
  component: MediaObject,
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
  },
}

const Template: ComponentStory<typeof MediaObject> = () => (
  <VerticalStack>
    <MediaObject media={<BlurImage src={nightImage} duration={0.5} />}>
      <Heading>Night View</Heading>
      <LoremIpsum />
    </MediaObject>
    <MediaObject
      media={<ScaleImage src={catImage} zoom='in' />}
      mediaSide={'right'}
    >
      <Heading>Kittenhood</Heading>
      <LoremIpsum />
    </MediaObject>
  </VerticalStack>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
