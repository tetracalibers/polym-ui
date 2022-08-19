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
    flexDirection: {
      ...controlTypeSelectAs('flexDirection'),
    },
    fill: {
      ...controlType('text'),
    },
    direction: {
      ...controlTypeSelectAs('direction'),
    },
    transition: {
      ...controlType('text'),
    },
    willChange: {
      ...controlType('text'),
    },
    outlineWidth: {
      ...controlType('text'),
    },
    textOverflow: {
      ...controlTypeSelectAs('textOverflow'),
    },
    backgroundOrigin: {
      ...controlTypeSelectAs('backgroundOrigin'),
    },
    background: {
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
      ...controlType('text'),
    },
    textRendering: {
      ...controlTypeSelectAs('textRendering'),
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
    overflow: {
      ...controlTypeSelectAs('overflow'),
    },
    textTransform: {
      ...controlTypeSelectAs('textTransform'),
    },
    transform: {
      ...controlType('text'),
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
    ':not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
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
  marginTop: '12px',
  marginX: '0',
  marginBottom: '0',
  outline: 'none',
  overflow: 'hidden',
  paddingY: '0',
  paddingX: '25px',
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

export const Example10 = Template.bind({})
Example10.args = {
  children: 'Example10',
  disabled: false,
  fontFamily: 'Aboreto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingY: '6px',
  paddingX: '14px',
  borderRadius: '6px',
  border: 'none',
  color: '#fff',
  background: 'linear-gradient(180deg, #4B91F7 0%, #367AF6 100%)',
  backgroundOrigin: 'border-box',
  boxShadow:
    '0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2)',
  userSelect: 'none',
  touchAction: 'manipulation',
  focusStyle: {
    boxShadow:
      'inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)',
    outline: '0',
  },
}

export const Example11 = Template.bind({})
Example11.args = {
  children: 'Example11',
  disabled: false,
  fontFamily: 'Aboreto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingY: '6px',
  paddingX: '14px',
  borderRadius: '6px',
  color: '#3D3D3D',
  background: '#fff',
  border: 'none',
  boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  focusStyle: {
    boxShadow:
      '0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)',
    outline: '0',
  },
}

export const Example12 = Template.bind({})
Example12.args = {
  children: 'Example12',
  disabled: false,
  fontFamily: 'Aboreto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingY: '6px',
  paddingX: '14px',
  borderRadius: '6px',
  border: 'none',
  background: '#6E6D70',
  boxShadow:
    '0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12)',
  color: '#DFDEDF',
  userSelect: 'none',
  touchAction: 'manipulation',
  focusStyle: {
    boxShadow:
      'inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)',
    outline: '0',
  },
}

export const Example13 = Template.bind({})
Example13.args = {
  children: 'Example13',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundColor: '#fff',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d5d9d9',
  borderRadius: '8px',
  boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
  boxSizing: 'border-box',
  color: '#0f1111',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '13px',
  lineHeight: '29px',
  paddingY: '0',
  paddingRight: '10px',
  paddingLeft: '11px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'middle',
  width: '100px',
  hoverStyle: {
    backgroundColor: '#f7fafa',
  },
  focusStyle: {
    borderColor: '#008296',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
    outline: '0',
  },
}

export const Example14 = Template.bind({})
Example14.args = {
  children: 'Example14',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundImage: 'linear-gradient(#f7f8fa ,#e7e9ec)',
  borderTopColor: '#adb1b8',
  borderRightColor: '#a2a6ac',
  borderLeftColor: '#a2a6ac',
  borderBottomColor: '#8d9096',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '3px',
  boxShadow: 'rgba(255,255,255,.6) 0 1px 0 inset',
  boxSizing: 'border-box',
  color: '#0f1111',
  cursor: 'pointer',
  display: 'inline-block',
  height: '29px',
  fontSize: '13px',
  outlineWidth: '0',
  overflow: 'hidden',
  paddingY: '0',
  paddingX: '11px',
  textAlign: 'center',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  userSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  activeStyle: {
    borderBottomColor: '#a2a6ac',
    ':hover': {
      borderBottomColor: '#a2a6ac',
    },
  },
  hoverStyle: {
    borderColor: '#a2a6ac #979aa1 #82858a',
    borderTopColor: '#a2a6ac',
    borderBottomColor: '#82858a',
    borderRightColor: '#979aa1',
    borderLeftColor: '#979aa1',
  },
  focusStyle: {
    borderColor: '#e77600',
    boxShadow: 'rgba(228, 121, 17, .5) 0 0 3px 2px',
    outline: '0',
  },
}

export const Example15 = Template.bind({})
Example15.args = {
  children: 'Example15',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundImage: 'linear-gradient(#42A1EC, #0070C9)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#0077CC',
  borderRadius: '4px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  direction: 'ltr',
  display: 'block',
  fontSize: '17px',
  fontWeight: '400',
  letterSpacing: '-.022em',
  lineHeight: '1.47059',
  minWidth: '30px',
  overflow: 'visible',
  paddingY: '4px',
  paddingX: '15px',
  textAlign: 'center',
  verticalAlign: 'baseline',
  userSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  disabledStyle: {
    cursor: 'default',
    opacity: '.3',
  },
  hoverStyle: {
    backgroundImage: 'linear-gradient(#51A9EE, #147BCD)',
    borderColor: '#1482D0',
    textDecoration: 'none',
  },
  activeStyle: {
    backgroundImage: 'linear-gradient(#3D94D9, #0067B9)',
    borderColor: '#006DBC',
    outline: 'none',
  },
  focusStyle: {
    boxShadow: 'rgba(131, 192, 253, 0.5) 0 0 0 3px',
    outline: 'none',
  },
}

export const Example16 = Template.bind({})
Example16.args = {
  children: 'Example16',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundColor: '#f8f9fa',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#f8f9fa',
  borderRadius: '4px',
  color: '#3c4043',
  cursor: 'pointer',
  fontSize: '14px',
  height: '36px',
  lineHeight: '27px',
  minWidth: '54px',
  paddingY: '0',
  paddingX: '16px',
  textAlign: 'center',
  userSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'pre',
  hoverStyle: {
    borderColor: '#dadce0',
    boxShadow: 'rgba(0, 0, 0, .1) 0 1px 1px',
    color: '#202124',
  },
  focusStyle: {
    borderColor: '#4285f4',
    outline: 'none',
  },
}

export const Example17 = Template.bind({})
Example17.args = {
  children: 'Example17',
  disabled: false,
  fontFamily: 'Aboreto',
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '#fff',
  borderRadius: '24px',
  borderStyle: 'none',
  boxShadow:
    'rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0',
  boxSizing: 'border-box',
  color: '#3c4043',
  cursor: 'pointer',
  display: 'inline-flex',
  fill: 'currentcolor',
  fontSize: '14px',
  fontWeight: '500',
  height: '48px',
  justifyContent: 'center',
  letterSpacing: '.25px',
  lineHeight: 'normal',
  maxWidth: '100%',
  overflow: 'visible',
  paddingY: '2px',
  paddingX: '24px',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'none',
  transition:
    'box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms',
  userSelect: 'none',
  touchAction: 'manipulation',
  width: 'auto',
  willChange: 'transform,opacity',
  zIndex: '0',
  hoverStyle: {
    background: '#F6F9FE',
    color: '#174ea6',
  },
  activeStyle: {
    boxShadow:
      '0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%)',
    outline: 'none',
  },
  focusStyle: {
    outline: 'none',
    border: '2px solid #4285f4',
  },
  notDisabledStyle: {
    boxShadow:
      'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
    ':hover': {
      boxShadow:
        'rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px',
    },
    ':focus': {
      boxShadow:
        'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
    },
    ':active': {
      boxShadow:
        'rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px',
    },
  },
  disabledStyle: {
    boxShadow:
      'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
  },
}

export const Example18 = Template.bind({})
Example18.args = {
  children: 'Example18',
  disabled: false,
  fontFamily: 'Aboreto',
  alignItems: 'center',
  backgroundColor: '#0A66C2',
  border: '0',
  borderRadius: '100px',
  boxSizing: 'border-box',
  color: '#ffffff',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: '16px',
  fontWeight: '600',
  justifyContent: 'center',
  lineHeight: '20px',
  maxWidth: '480px',
  minHeight: '40px',
  minWidth: '0px',
  overflow: 'hidden',
  padding: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',
  textAlign: 'center',
  touchAction: 'manipulation',
  transition:
    'background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s',
  userSelect: 'none',
  verticalAlign: 'middle',
  hoverStyle: {
    backgroundColor: '#16437E',
    color: '#ffffff',
  },
  focusStyle: {
    backgroundColor: '#16437E',
    color: '#ffffff',
  },
  activeStyle: {
    background: '#09223b',
    color: 'rgb(255, 255, 255, .7)',
  },
  disabledStyle: {
    cursor: 'not-allowed',
    background: 'rgba(0, 0, 0, .08)',
    color: 'rgba(0, 0, 0, .3)',
  },
}

export const Example19 = Template.bind({})
Example19.args = {
  children: 'Example19',
  disabled: false,
  fontFamily: 'Aboreto',
  appearance: 'button',
  backgroundColor: '#1899D6',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '16px',
  borderTopWidth: '0',
  borderRightWidth: '0',
  borderLeftWidth: '0',
  borderBottomWidth: '4px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '15px',
  fontWeight: '700',
  letterSpacing: '.8px',
  lineHeight: '20px',
  margin: '0',
  outline: 'none',
  overflow: 'visible',
  padding: '13px 16px',
  textAlign: 'center',
  textTransform: 'uppercase',
  touchAction: 'manipulation',
  transform: 'translateZ(0)',
  transition: 'filter .2s',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  width: '100%',
  afterStyle: {
    backgroundClip: 'padding-box',
    backgroundColor: '#1CB0F6',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: '16px',
    borderTopWidth: '0',
    borderRightWidth: '0',
    borderLeftWidth: '0',
    borderBottomWidth: '4px',
    bottom: '-4px',
    content: '""',
    left: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: '-1',
  },
  focusStyle: {
    userSelect: 'auto',
  },
  hoverStyle: {
    ':not(:disabled)': {
      filter: 'brightness(1.1)',
    },
  },
  disabledStyle: {
    cursor: 'auto',
  },
}

export const Example20 = Template.bind({})
Example20.args = {
  children: 'Example20',
  disabled: false,
  fontFamily: 'Aboreto',
  appearance: 'button',
  backgroundColor: '#4D4AE8',
  backgroundImage:
    'linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0))',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#4D4AE8',
  borderRadius: '1rem',
  boxShadow:
    'rgba(255, 255, 255, 0.15) 0 1px 0 inset,rgba(46, 54, 80, 0.075) 0 1px 1px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.5',
  margin: '0',
  paddingY: '.5rem',
  paddingX: '1rem',
  textAlign: 'center',
  textTransform: 'none',
  transition:
    'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'middle',
  focusStyle: {
    outline: '0',
    backgroundColor: '#413FC5',
    borderColor: '#3E3BBA',
    boxShadow:
      'rgba(255, 255, 255, 0.15) 0 1px 0 inset, rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 .2rem',
    ':not(:focus-visible)': {
      outline: '0',
    },
  },
  hoverStyle: {
    backgroundColor: '#3733E5',
    borderColor: '#3733E5',
  },
  activeStyle: {
    backgroundColor: '#3E3BBA',
    backgroundImage: 'none',
    borderColor: '#3A38AE',
    boxShadow: 'rgba(46, 54, 80, 0.125) 0 3px 5px inset',
    ':focus': {
      boxShadow:
        'rgba(46, 54, 80, 0.125) 0 3px 5px inset, rgba(104, 101, 235, 0.5) 0 0 0 .2rem',
    },
  },
  disabledStyle: {
    backgroundImage: 'none',
    boxShadow: 'none',
    opacity: '.65',
    pointerEvents: 'none',
  },
}

export const Example21 = Template.bind({})
Example21.args = {
  children: 'Example21',
  disabled: false,
  fontFamily: 'Aboreto',
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '#3EB2FD',
  backgroundImage: 'linear-gradient(1deg, #4F58FD, #149BF3 99%)',
  backgroundSize: 'calc(100% + 20px) calc(100% + 20px)',
  borderRadius: '100px',
  borderWidth: '0',
  boxShadow: 'none',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: '1rem',
  height: 'auto',
  justifyContent: 'center',
  lineHeight: '1.5',
  paddingY: '6px',
  paddingX: '20px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background-color .2s,background-position .2s',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
  activeStyle: {
    outline: 'none',
  },
  focusStyle: {
    outline: 'none',
    ':not(:active)': {
      boxShadow: 'rgba(40, 170, 255, 0.25) 0 0 0 .125em',
    },
  },
  hoverStyle: {
    backgroundPosition: '-20px -20px',
  },
}

export const Example22 = Template.bind({})
Example22.args = {
  children: 'Example22',
  disabled: false,
  fontFamily: 'Aboreto',
  alignItems: 'center',
  appearance: 'button',
  backgroundColor: '#0276FF',
  borderRadius: '8px',
  borderStyle: 'none',
  boxShadow: 'rgba(255, 255, 255, 0.26) 0 1px 2px inset',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: '0',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  paddingY: '10px',
  paddingX: '21px',
  textAlign: 'center',
  textTransform: 'none',
  transition:
    'color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out',
  userSelect: 'none',
  touchAction: 'manipulation',
  activeStyle: {
    backgroundColor: '#006AE8',
  },
  hoverStyle: {
    backgroundColor: '#1C84FF',
  },
}

export const Example23 = Template.bind({})
Example23.args = {
  children: 'Example23',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundColor: '#FFFFFF',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#222',
  borderRadius: '8px',
  boxSizing: 'border-box',
  color: '#222222',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '20px',
  margin: '0',
  outline: 'none',
  paddingY: '13px',
  paddingX: '23px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  touchAction: 'manipulation',
  transition:
    'box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s',
  userSelect: 'none',
  width: 'auto',
  focusVisibleStyle: {
    boxShadow: '#222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px',
    transition: 'box-shadow .2s',
  },
  activeStyle: {
    backgroundColor: '#F7F7F7',
    borderColor: '#000000',
    transform: 'scale(.96)',
  },
  disabledStyle: {
    borderColor: '#DDDDDD',
    color: '#DDDDDD',
    cursor: 'not-allowed',
    opacity: '1',
  },
}

export const Example24 = Template.bind({})
Example24.args = {
  children: 'Example24',
  disabled: false,
  fontFamily: 'Aboreto',
  background: '#FF4742',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#ff4742',
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 1px 2px 4px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '800',
  lineHeight: '16px',
  minHeight: '40px',
  outline: '0',
  paddingY: '12px',
  paddingX: '14px',
  textAlign: 'center',
  textRendering: 'geometricPrecision',
  textTransform: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  verticalAlign: 'middle',
  hoverStyle: {
    backgroundColor: 'initial',
    backgroundPosition: '0 0',
    color: '#FF4742',
  },
  activeStyle: {
    backgroundColor: 'initial',
    backgroundPosition: '0 0',
    color: '#FF4742',
    opacity: '.5',
  },
}

export const Example25 = Template.bind({})
Example25.args = {
  children: 'Example25',
  disabled: false,
  fontFamily: 'Aboreto',
  backgroundColor: '#36A9AE',
  backgroundImage: 'linear-gradient(#37ADB2, #329CA0)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#2a8387',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 1px',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'block',
  fontSize: '17px',
  lineHeight: '100%',
  margin: '0',
  outline: '0',
  paddingTop: '11px',
  paddingX: '15px',
  paddingBottom: '12px',
  textAlign: 'center',
  transition: 'box-shadow .05s ease-in-out,opacity .05s ease-in-out',
  userSelect: 'none',
  touchAction: 'manipulation',
  width: '100%',
  hoverStyle: {
    boxShadow:
      'rgba(255, 255, 255, 0.3) 0 0 2px inset, rgba(0, 0, 0, 0.4) 0 1px 2px',
    textDecoration: 'none',
    transitionDuration: '.15s, .15s',
  },
  activeStyle: {
    boxShadow:
      'rgba(0, 0, 0, 0.15) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 1px 1px',
  },
  disabledStyle: {
    cursor: 'not-allowed',
    opacity: '.6',
    ':active': {
      pointerEvents: 'none',
    },
    ':hover': {
      boxShadow: 'none',
    },
  },
}

export const Example26 = Template.bind({})
Example26.args = {
  children: 'Example26',
  disabled: false,
  fontFamily: 'Aboreto',
  appearance: 'button',
  backgroundColor: '#1652F0',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#1652f0',
  borderRadius: '4px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontSize: '14px',
  lineHeight: '1.15',
  overflow: 'visible',
  paddingY: '12px',
  paddingX: '16px',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'none',
  transitionProperty: 'all',
  transitionDuration: '80ms',
  transitionTimingFunction: 'ease-in-out',
  userSelect: 'none',
  touchAction: 'manipulation',
  width: 'fit-content',
  disabledStyle: {
    opacity: '.5',
  },
  focusStyle: {
    outline: '0',
  },
  hoverStyle: {
    backgroundColor: '#0A46E4',
    borderColor: '#0A46E4',
  },
  activeStyle: {
    backgroundColor: '#0039D7',
    borderColor: '#0039D7',
  },
}

export const Example27 = Template.bind({})
Example27.args = {
  children: 'Example27',
  disabled: false,
  fontFamily: 'Aboreto',
  appearance: 'none',
  backgroundColor: '#000000',
  borderColor: '#1A1A1A',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '15px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: 'normal',
  margin: '0',
  minHeight: '60px',
  minWidth: '0',
  outline: 'none',
  paddingY: '24px',
  paddingX: '24px',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  width: '100%',
  willChange: 'transform',
  disabledStyle: {
    pointerEvents: 'none',
  },
  hoverStyle: {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
    transform: 'translateY(-2px)',
  },
  activeStyle: {
    boxShadow: 'none',
    transform: 'translateY(0)',
  },
}

export const Example28 = Template.bind({})
Example28.args = {
  children: 'Example28',
  disabled: false,
  fontFamily: 'Aboreto',
  appearance: 'none',
  backgroundColor: 'transparent',
  borderColor: '#1A1A1A',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '15px',
  boxSizing: 'border-box',
  color: '#3B3B3B',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: 'normal',
  margin: '0',
  minHeight: '60px',
  minWidth: '0',
  outline: 'none',
  paddingY: '16px',
  paddingX: '24px',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  width: '100%',
  willChange: 'transform',
  disabledStyle: {
    pointerEvents: 'none',
  },
  hoverStyle: {
    color: '#fff',
    backgroundColor: '#1A1A1A',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
    transform: 'translateY(-2px)',
  },
  activeStyle: {
    boxShadow: 'none',
    transform: 'translateY(0)',
  },
}

export const Example29 = Template.bind({})
Example29.args = {
  children: 'Example29',
  disabled: false,
  fontFamily: 'Aboreto',
  alignItems: 'center',
  appearance: 'none',
  backgroundImage:
    'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
  border: '0',
  borderRadius: '6px',
  boxShadow:
    'rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-flex',
  height: '48px',
  justifyContent: 'center',
  lineHeight: '1',
  listStyle: 'none',
  overflow: 'hidden',
  paddingLeft: '16px',
  paddingRight: '16px',
  position: 'relative',
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'box-shadow .15s,transform .15s',
  userSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  willChange: 'box-shadow,transform',
  fontSize: '18px',
  focusStyle: {
    boxShadow:
      '#3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',
  },
  hoverStyle: {
    boxShadow:
      'rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',
    transform: 'translateY(-2px)',
  },
  activeStyle: {
    boxShadow: '#3c4fe0 0 3px 7px inset',
    transform: 'translateY(2px)',
  },
}
