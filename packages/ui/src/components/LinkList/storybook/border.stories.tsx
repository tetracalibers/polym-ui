import { ComponentStory } from '@storybook/react'
import { borderLinkListArgTypes } from './argTypes'
import { defaultBorderLinkListProps, LinkList } from '..'

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
    ...borderLinkListArgTypes,
  },
}

/* -------------------------------------------- */

const Template: ComponentStory<typeof LinkList> = ({ ...args }) => (
  <LinkList.Border {...args}>
    <LinkList.Item href='#profile'>Profile</LinkList.Item>
    <LinkList.Item href='#writing'>Writing</LinkList.Item>
    <LinkList.Item href='#lecture'>Lecture</LinkList.Item>
    <LinkList.Item href='#blog'>Blog</LinkList.Item>
    <LinkList.Item href='#work'>Work</LinkList.Item>
  </LinkList.Border>
)

export const border = Template.bind({})
border.args = {
  ...defaultBorderLinkListProps,
}
