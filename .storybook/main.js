module.exports = {
  stories: [
    '../packages/**/*.stories.@(tsx|ts|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@whitespace/storybook-addon-html',
  ],
  framework: '@storybook/react',
}
