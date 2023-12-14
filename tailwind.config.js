import daisyui from 'daisyui';

module.exports = {
  config: {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    plugins: [(daisyui)],
    daisyui: {
      themes: [
        {
          mytheme: {
            'primary': '#140438',
            'secondary': '#9503EC',
            'accent': '#00CEFF',
            'neutral': '#008CF1',
            'base-100': '#ffffff',
            'info': '#00f9ff',
            'success': '#00992f',
            'warning': '#ff9b00',
            'error': '#ff3557',
          },
        },
      ],
    },
  },
}
