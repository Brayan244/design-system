module.exports = {
  stories: ['../**/*.stories.jsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
      },
    });

    return config;
  },
};
