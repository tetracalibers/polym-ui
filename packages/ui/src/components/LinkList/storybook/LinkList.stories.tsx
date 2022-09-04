import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultLinkListCoreProps } from '../model/props'
import { LinkList } from '..'

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
    ...coreArgTypes,
  },
}

/* -------------------------------------------- */

const EmailTemplate: ComponentStory<typeof LinkList> = () => (
  <LinkList>
    <LinkList.Item href='#profile'>Profile</LinkList.Item>
    <LinkList.Item href='#writing'>Writing</LinkList.Item>
    <LinkList.Item href='#lecture'>Lecture</LinkList.Item>
    <LinkList.Item href='#blog'>Blog</LinkList.Item>
    <LinkList.Item href='#work'>Work</LinkList.Item>
  </LinkList>
)

export const playground = EmailTemplate.bind({})
playground.args = {
  ...defaultLinkListCoreProps,
}
