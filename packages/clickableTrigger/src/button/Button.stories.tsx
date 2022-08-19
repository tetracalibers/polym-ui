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
    alignItems: {
      ...controlTypeSelectAs('alignItems'),
    },
    backgroundClip: {
      ...controlTypeSelectAs('backgroundClip'),
    },
    justifyContent: {
      ...controlTypeSelectAs('justifyContent'),
    },
    backfaceVisibility: {
      ...controlTypeSelectAs('backfaceVisibility'),
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

export const Example5 = Template.bind({})
Example5.args = {
  children: 'Example5',
  disabled: false,
  alignItems: 'center',
  backgroundClip: 'padding-box',
  backgroundColor: '#fa6400',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '0.25rem',
  boxShadow: 'rgba(0, 0, 0, 0.02) 0 1px 3px 0',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'Aboreto',
  fontSize: '16px',
  fontWeight: '600',
  justifyContent: 'center',
  lineHeight: '1.25',
  margin: '0',
  minHeight: '3rem',
  paddingY: 'calc(0.875rem - 1px)',
  paddingX: 'calc(1.5rem - 1px)',
  position: 'relative',
  textDecoration: 'none',
  transitionProperty: 'all',
  transitionDuration: '250ms',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'baseline',
  width: 'auto',
  hoverStyle: {
    backgroundColor: '#fb8332',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
    transform: 'translateY(-1px)',
  },
  focusStyle: {
    backgroundColor: '#fb8332',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
  },
  activeStyle: {
    backgroundColor: '#c85000',
    boxShadow: 'rgba(0, 0, 0, 0.06) 0 2px 4px',
    transform: 'translateY(0)',
  },
}

export const Example6 = Template.bind({})
Example6.args = {
  children: 'Example6',
  disabled: false,
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius: '0.25rem',
  boxShadow: 'rgba(0, 0, 0, 0.02) 0 1px 3px 0',
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 0.85)',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'Aboreto',
  fontSize: '16px',
  fontWeight: '600',
  justifyContent: 'center',
  lineHeight: '1.25',
  margin: '0',
  minHeight: '3rem',
  paddingY: 'calc(0.875rem - 1px)',
  paddingX: 'calc(1.5rem - 1px)',
  position: 'relative',
  textDecoration: 'none',
  transitionProperty: 'all',
  transitionDuration: '250ms',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'baseline',
  width: 'auto',
  hoverStyle: {
    borderColor: 'rgba(0, 0, 0, 0.15)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
    color: 'rgba(0, 0, 0, 0.65)',
    transform: 'translateY(-1px)',
  },
  focusStyle: {
    borderColor: 'rgba(0, 0, 0, 0.15)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
    color: 'rgba(0, 0, 0, 0.65)',
  },
  activeStyle: {
    backgroundColor: '#f0f0f1',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    boxShadow: 'rgba(0, 0, 0, 0.06) 0 2px 4px',
    color: 'rgba(0, 0, 0, 0.65)',
    transform: 'translateY(0)',
  },
}

export const Example7 = Template.bind({})
Example7.args = {
  children: 'Example7',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundColor: '#0095ff',
  border: '1px solid transparent',
  borderRadius: '3px',
  boxShadow: 'rgba(255, 255, 255, 0.4) 0 1px 0 0 inset',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '1.15385',
  margin: '0',
  outline: 'none',
  paddingY: '8px',
  paddingX: '0.8em',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'baseline',
  whiteSpace: 'nowrap',
  hoverStyle: {
    backgroundColor: '#07c',
  },
  focusStyle: {
    backgroundColor: '#07c',
    boxShadow: '0 0 0 4px rgba(0, 149, 255, 0.15)',
  },
  activeStyle: {
    backgroundColor: '#0064bd',
    boxShadow: 'none',
  },
}

export const Example8 = Template.bind({})
Example8.args = {
  children: 'Example8',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundColor: '#e1ecf4',
  borderRadius: '3px',
  border: '1px solid #7aa7c7',
  boxShadow: 'rgba(255, 255, 255, 0.7) 0 1px 0 0 inset',
  boxSizing: 'border-box',
  color: '#39739d',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '1.15385',
  margin: '0',
  outline: 'none',
  paddingY: '8px',
  paddingX: '0.8em',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'baseline',
  whiteSpace: 'nowrap',
  hoverStyle: {
    backgroundColor: '#b3d3ea',
    color: '#2c5777',
  },
  focusStyle: {
    backgroundColor: '#b3d3ea',
    color: '#2c5777',
    boxShadow: '0 0 0 4px rgba(0, 149, 255, 0.15)',
  },
  activeStyle: {
    backgroundColor: '#a0c7e4',
    boxShadow: 'none',
    color: '#2c5777',
  },
}

export const Example9 = Template.bind({})
Example9.args = {
  children: 'Example9',
  disabled: false,
  fontFamily: 'Aboreto',
  appearance: 'button',
  backfaceVisibility: 'hidden',
  backgroundColor: '#405cf5',
  borderRadius: '6px',
  borderWidth: '0',
  boxShadow:
    'rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '100%',
  height: '44px',
  lineHeight: '1.15',
  margin: '12px 0 0',
  outline: 'none',
  overflow: 'hidden',
  padding: '0 25px',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'none',
  transform: 'translateZ(0)',
  transition: 'all .2s box-shadow .08s ease-in',
  userSelect: 'none',
  touchAction: 'manipulation',
  width: '100%',
  disabledStyle: {
    cursor: 'default',
  },
  focusStyle: {
    boxShadow:
      'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px',
  },
}
