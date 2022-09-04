// .storybook/manager.js

import { addons } from '@storybook/addons'
import polymuiTheme from './PolymuiTheme'

addons.setConfig({
  //isFullscreen: false,
  //showNav: true,
  //showPanel: true,
  panelPosition: 'right',
  //enableShortcuts: true,
  //showToolbar: true,
  theme: polymuiTheme,
  selectedPanel: 'storybook/controls/panel',
  //initialActive: 'sidebar',
  //sidebar: {
  //  showRoots: false,
  //  collapsedRoots: ['other'],
  //},
  //toolbar: {
  //  title: { hidden: false },
  //  zoom: { hidden: false },
  //  eject: { hidden: false },
  //  copy: { hidden: false },
  //  fullscreen: { hidden: false },
  //},
})
