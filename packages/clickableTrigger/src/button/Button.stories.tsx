import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
  title: 'clickable-trigger/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Hello, world!',
  /* space -------------------------------------- */
  marginTop: '2rem',
  marginBottom: '2rem',
  marginLeft: '2rem',
  marginRight: '2rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  /* color -------------------------------------- */
  color: 'blue',
  backgroundColor: 'magenta',
  opacity: 0.5,
  /* typography --------------------------------- */
  fontFamily: 'Kaisei Opti',
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '1.5rem',
  letterSpacing: '.5rem',
  textAlign: 'center',
  fontStyle: 'italic',
  /* layout ------------------------------------- */
}
