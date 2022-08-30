import { ComponentStory } from '@storybook/react'
import { TextOverAnimatedImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../../assets/myproduct.jpg'
import { textOverImageArgTypes } from '../../common/argTypes'
import { LightTextBox } from '../../../../mock/TestBox'

export default {
  title: 'image effect/TextOverAnimatedImage',
  component: TextOverAnimatedImage,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
    ...textOverImageArgTypes,
    ...commmonArgTypes,
  },
}

const Template: ComponentStory<typeof TextOverAnimatedImage> = ({
  src,
  aboveText,
  ...args
}) => (
  <TextOverAnimatedImage
    {...args}
    aboveText={<LightTextBox>{aboveText}</LightTextBox>}
    src={sample01}
  />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  aboveText: 'Sample Text',
}
playground.argTypes = {}
