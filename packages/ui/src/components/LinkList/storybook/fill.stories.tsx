import { ComponentStory } from '@storybook/react'
import { fillLinkListArgTypes } from './argTypes'
import { defaultFillLinkListProps, LinkList } from '..'

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
    ...fillLinkListArgTypes,
  },
}

/* -------------------------------------------- */

const Template: ComponentStory<typeof LinkList> = ({ ...args }) => (
  <LinkList.Fill {...args}>
    <LinkList.Item href='#profile'>Profile</LinkList.Item>
    <LinkList.Item href='#writing'>Writing</LinkList.Item>
    <LinkList.Item href='#lecture'>Lecture</LinkList.Item>
    <LinkList.Item href='#blog'>Blog</LinkList.Item>
    <LinkList.Item href='#work'>Work</LinkList.Item>
  </LinkList.Fill>
)

export const fill = Template.bind({})
fill.args = {
  ...defaultFillLinkListProps,
}
