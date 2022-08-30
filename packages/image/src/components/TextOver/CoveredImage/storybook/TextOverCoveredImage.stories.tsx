import { ComponentStory } from '@storybook/react'
import { TextOverCoveredImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../../assets/myproduct.jpg'
import { textOverImageArgTypes } from '../../common/argTypes'
import { LightTextBox } from '../../../../mock/TestBox'

export default {
  title: 'image effect/TextOverCoveredImage',
  component: TextOverCoveredImage,
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

const Template: ComponentStory<typeof TextOverCoveredImage> = ({
  src,
  aboveText,
  ...args
}) => (
  <TextOverCoveredImage
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
