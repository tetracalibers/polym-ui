module.exports = {
  stories: [
    '../packages/**/src/!(template)/**/*.stories.@(tsx|ts|mdx)',
    //'../core/mock/src/components/**/*.stories.@(tsx|ts|mdx)',
    //'../examples/syntax/src/components/**/*.stories.@(tsx|ts|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-links',
    //'@storybook/addon-interactions',
    '@storybook/addon-storysource',
    //'@storybook/addon-actions/register',
    //'@storybook/addon-console',
    '@whitespace/storybook-addon-html',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
}
