import './style.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'light', value: '#f5f4f0' },
      { name: 'dark', value: '#4d608b' },
    ],
  },
}
