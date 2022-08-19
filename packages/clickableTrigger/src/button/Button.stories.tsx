import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
export default {
  title: 'clickable-trigger/Button',
  component: Button,
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
  outlineNone: true,
  paddingY: '10px',
  paddingX: '16px',
  position: 'relative',
  textAlign: 'center',
  textDecorationNone: true,
  transitionProperty: 'color',
  transitionDuration: '100ms',
  verticalAlign: 'baseline',
  userSelect: 'none',
  touchAction: 'manipulation',
  hover: {
    backgroundColor: '#f082ac',
  },
  focus: {
    backgroundColor: '#f082ac',
  },
}
