import { ComponentStory } from '@storybook/react'
import { TextOverFramedImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../../assets/myproduct.jpg'
import { textOverImageArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../../../../mock/TestBox'

export default {
  title: 'image effect/TextOverFramedImage',
  component: TextOverFramedImage,
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

const Template: ComponentStory<typeof TextOverFramedImage> = ({
  src,
  aboveText,
  ...args
}) => (
  <TextOverFramedImage
    {...args}
    aboveText={<DarkTextBox>{aboveText}</DarkTextBox>}
    src={sample01}
  />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  aboveText: 'Sample Text',
}
playground.argTypes = {}
