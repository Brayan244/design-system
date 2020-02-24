module.exports = {
  stories: ['../**/*.stories.(jsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('@emotion/babel-preset-css-prop')],
        plugins: ['react-docgen'],
      },
    });

    return config;
  },
};
