import { ComponentStory } from '@storybook/react'
import { underlineLinkListArgTypes } from './argTypes'
import { defaultUnderLineLinkListProps, LinkList } from '..'

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
    ...underlineLinkListArgTypes,
  },
}

/* -------------------------------------------- */

const Template: ComponentStory<typeof LinkList> = ({ ...args }) => (
  <LinkList.Underline {...args}>
    <LinkList.Item href='#profile'>Profile</LinkList.Item>
    <LinkList.Item href='#writing'>Writing</LinkList.Item>
    <LinkList.Item href='#lecture'>Lecture</LinkList.Item>
    <LinkList.Item href='#blog'>Blog</LinkList.Item>
    <LinkList.Item href='#work'>Work</LinkList.Item>
  </LinkList.Underline>
)

export const underline = Template.bind({})
underline.args = {
  ...defaultUnderLineLinkListProps,
}
