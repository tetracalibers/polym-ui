import { ComponentStory } from '@storybook/react'
import { coreArgTypes, underlineVerArgTypes } from '../model/argTypes'
import { defaultLinkListCoreProps } from '../model/props'
import { defaultUnderLineLinkListProps, LinkList, UnderlineLinkList } from '..'

export default {
  title: 'navigation/LinkList',
  component: LinkList,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    ...underlineVerArgTypes,
  },
}

/* -------------------------------------------- */

const EmailTemplate: ComponentStory<typeof LinkList> = ({ ...args }) => (
  <UnderlineLinkList {...args}>
    <LinkList.Item href='#profile'>Profile</LinkList.Item>
    <LinkList.Item href='#writing'>Writing</LinkList.Item>
    <LinkList.Item href='#lecture'>Lecture</LinkList.Item>
    <LinkList.Item href='#blog'>Blog</LinkList.Item>
    <LinkList.Item href='#work'>Work</LinkList.Item>
  </UnderlineLinkList>
)

export const underline = EmailTemplate.bind({})
underline.args = {
  ...defaultUnderLineLinkListProps,
}
