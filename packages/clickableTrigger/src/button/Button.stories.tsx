import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getSelectTypeControlOption, controlType } from 'story-builder'
import Button, { UseCssProps } from './Button'

const controlTypeSelectAs = getSelectTypeControlOption<keyof UseCssProps>()

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
      ...controlTypeSelectAs('borderStyle'),
    },
    boxSizing: {
      ...controlTypeSelectAs('boxSizing'),
    },
    color: {
      ...controlType('color'),
    },
    cursor: {
      ...controlTypeSelectAs('cursor'),
    },
    display: {
      ...controlTypeSelectAs('display'),
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
      ...controlTypeSelectAs('listStyle'),
    },
    margin: {
      ...controlType('text'),
    },
    outline: {
      ...controlTypeSelectAs('outline'),
    },
    paddingX: {
      ...controlType('text'),
    },
    paddingY: {
      ...controlType('text'),
    },
    position: {
      ...controlTypeSelectAs('position'),
    },
    textAlign: {
      ...controlTypeSelectAs('textAlign'),
    },
    textDecoration: {
      ...controlTypeSelectAs('textDecoration'),
    },
    transitionProperty: {
      ...controlType('text'),
    },
    transitionDuration: {
      ...controlType('text'),
    },
    verticalAlign: {
      ...controlTypeSelectAs('verticalAlign'),
    },
    userSelect: {
      ...controlTypeSelectAs('userSelect'),
    },
    touchAction: {
      ...controlTypeSelectAs('touchAction'),
    },
    whiteSpace: {
      ...controlTypeSelectAs('whiteSpace'),
    },
    appearance: {
      ...controlTypeSelectAs('appearance'),
    },
    transitionTimingFunction: {
      ...controlType('text'),
    },
    wordWrap: {
      ...controlTypeSelectAs('wordWrap'),
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export const Example1 = Template.bind({})
Example1.args = {
  children: 'Example1',
  disabled: false,
  backgroundColor: '#ea4c89',
  borderRadius: '8px',
  borderStyle: 'none',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Aboreto',
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

export const Example2 = Template.bind({})
Example2.args = {
  children: 'Example2',
  disabled: false,
  backgroundColor: 'rgba(51, 51, 51, 0.05)',
  borderRadius: '8px',
  borderWidth: '0',
  color: '#333',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Aboreto',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  listStyle: 'none',
  margin: '0',
  paddingY: '10px',
  paddingX: '12px',
  textAlign: 'center',
  transitionProperty: 'all',
  transitionDuration: '200ms',
  verticalAlign: 'baseline',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  touchAction: 'manipulation',
}

export const Example3 = Template.bind({})
Example3.args = {
  children: 'Example3',
  disabled: false,
  appearance: 'none',
  backgroundColor: '#2ea44f',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(27, 31, 35, 0.15)',
  borderRadius: '6px',
  boxShadow: 'rgba(27, 31, 35, 0.1) 0 1px 0',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Aboreto',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  paddingY: '6px',
  paddingX: '16px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  hoverStyle: {
    backgroundColor: '#2c974b',
  },
  focusStyle: {
    boxShadow: 'rgba(46, 164, 79, 0.4) 0 0 0 3px',
    outline: 'none',
  },
  disabledStyle: {
    backgroundColor: '#94d3ac',
    borderColor: 'rgba(27, 31, 35, 0.1)',
    color: 'rgba(255, 255, 255, 0.8)',
    cursor: 'default',
  },
  activeStyle: {
    backgroundColor: '#298e46',
    boxShadow: 'rgba(20, 70, 32, 0.2) 0 1px 0 inset',
  },
}

export const Example4 = Template.bind({})
Example4.args = {
  children: 'Example4',
  disabled: false,
  appearance: 'none',
  backgroundColor: '#fafbfc',
  border: '1px solid rgba(27, 31, 35, 0.15)',
  borderRadius: '6px',
  boxShadow:
    'rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset',
  boxSizing: 'border-box',
  color: '#24292e',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Aboreto',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '20px',
  listStyle: 'none',
  paddingY: '6px',
  paddingX: '16px',
  position: 'relative',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'cubic-bezier(0.3, 0, 0.5, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  wordWrap: 'break-word',
  hoverStyle: {
    backgroundColor: '#f3f4f6',
    textDecoration: 'none',
    transitionDuration: '0.1s',
  },
  disabledStyle: {
    backgroundColor: '#fafbfc',
    borderColor: 'rgba(27, 31, 35, 0.15)',
    color: '#959da5',
    cursor: 'default',
  },
  activeStyle: {
    backgroundColor: '#edeff2',
    boxShadow: 'rgba(225, 228, 232, 0.2) 0 1px 0 inset',
    transitionProperty: 'none',
    transitionDuration: '0s',
  },
  focusStyle: {
    outlineWidth: '1px',
    outlineColor: 'transparent',
  },
  beforeStyle: {
    display: 'none',
  },
}
