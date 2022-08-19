import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
export default {
  title: 'clickable-trigger/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    borderRadius: {
      control: {
        type: 'text',
      },
    },
    borderStyle: {
      control: {
        type: 'select',
      },
      options: ['none'],
    },
    boxSizing: {
      control: {
        type: 'select',
      },
      options: ['border-box', 'content-box'],
    },
    color: {
      control: {
        type: 'color',
      },
    },
    cursor: {
      control: {
        type: 'select',
      },
      options: ['pointer'],
    },
    display: {
      control: {
        type: 'select',
      },
      options: ['inline-block', 'block'],
    },
    fontFamily: {
      control: {
        type: 'text',
      },
    },
    fontSize: {
      control: {
        type: 'text',
      },
    },
    fontWeight: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
    lineHeight: {
      control: {
        type: 'text',
      },
    },
    listStyle: {
      control: {
        type: 'select',
      },
      options: ['none'],
    },
    margin: {
      control: {
        type: 'text',
      },
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
