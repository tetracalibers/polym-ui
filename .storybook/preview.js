import './style.css'
import { ColorPalette } from '../utility/styled-utility-first/lib/index.es'

export const parameters = {
  //actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: ColorPalette.all,
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: ColorPalette.grayScale.light },
      { name: 'dark', value: ColorPalette.grayScale.dark },
    ],
  },
}
