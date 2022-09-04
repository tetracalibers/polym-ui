import { create } from '@storybook/theming'
import { ColorPalette } from '../utility/styled-utility-first/lib/index.es'

export default create({
  base: 'light',
  brandTitle: 'polym Ui',
  //brandUrl: 'https://example.com',
  brandImage:
    'https://github.com/tetracalibers/polym-ui/blob/main/assets/logo/polyhexUI_light.jpg?raw=true',
  brandTarget: '_self',
  colorSecondary: ColorPalette.pastel.purple,
  colorPrimary: ColorPalette.pastel.pink,
  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'rgb(207, 216, 220)',
  appBorderRadius: 4,

  // Typography
  //fontBase: '"Open Sans", sans-serif',
  //fontCode: 'monospace',

  // Text colors
  textColor: '#4d608b',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#4d608b',
  barSelectedColor: 'rgb(244, 143, 177)',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#8ae7bc',
  inputTextColor: '#4d608b',
  inputBorderRadius: 4,
})
