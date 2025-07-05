module.exports = {
  title: 'MediLingua Docs',
  tagline: 'Multilingual, voice-enabled healthcare platform',
  url: 'https://docs.medilingua.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'wo']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        }
      }
    ]
  ]
};
