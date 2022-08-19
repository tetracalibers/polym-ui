import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getSelectTypeControlOption, controlType } from 'story-builder'
import Button, { UseCssProps } from './Button'

const selectOption = getSelectTypeControlOption<keyof UseCssProps>()

export default {
  title: 'clickable-trigger/Button',
  component: Button,
  argTypes: {
    children: {
      ...controlType('text'),
    },
    backgroundColor: {
      ...controlType('color'),
    },
    borderRadius: {
      ...controlType('text'),
    },
    borderStyle: {
      ...selectOption('borderStyle'),
    },
    boxSizing: {
      ...selectOption('boxSizing'),
    },
    color: {
      ...controlType('color'),
    },
    cursor: {
      ...selectOption('cursor'),
    },
    display: {
      ...selectOption('display'),
    },
    fontFamily: {
      ...controlType('text'),
    },
    fontSize: {
      ...controlType('text'),
    },
    fontWeight: {
      ...controlType('text'),
    },
    height: {
      ...controlType('text'),
    },
    lineHeight: {
      ...controlType('text'),
    },
    listStyle: {
      ...selectOption('listStyle'),
    },
    margin: {
      ...controlType('text'),
    },
    outline: {
      ...selectOption('outline'),
    },
    paddingX: {
      ...controlType('text'),
    },
    paddingY: {
      ...controlType('text'),
    },
    position: {
      ...selectOption('position'),
    },
    textAlign: {
      ...selectOption('textAlign'),
    },
    textDecoration: {
      ...selectOption('textDecoration'),
    },
    transitionProperty: {
      ...controlType('text'),
    },
    transitionDuration: {
      ...controlType('text'),
    },
    verticalAlign: {
      ...selectOption('verticalAlign'),
    },
    userSelect: {
      ...selectOption('userSelect'),
    },
    touchAction: {
      ...selectOption('touchAction'),
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export const Example1 = Template.bind({})
Example1.args = {
  children: 'sample 1',
  backgroundColor: '#ea4c89',
  borderRadius: '8px',
  borderStyle: 'none',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Hina Mincho',
  fontSize: '14px',
  fontWeight: '500',
  height: '40px',
  lineHeight: '20px',
  listStyle: 'none',
  margin: '0',
  outline: 'none',
  paddingY: '10px',
  paddingX: '16px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transitionProperty: 'color',
  transitionDuration: '100ms',
  verticalAlign: 'baseline',
  userSelect: 'none',
  touchAction: 'manipulation',
  hoverStyle: {
    backgroundColor: '#f082ac',
  },
  focusStyle: {
    backgroundColor: '#f082ac',
  },
}
