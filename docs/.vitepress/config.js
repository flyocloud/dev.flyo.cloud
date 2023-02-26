export default {
  title: 'Flyo Developer-Ressourcen',
  description: 'Flyo Developer-Ressourcen',
  lang: 'de-DE',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/flyocloud/dev.flyo.cloud/edit/main/docs/:path'
    },
    siteTitle: 'Developer',
    logo: {light: '/assets/logo.png', dark: '/assets/logodark.png'},
    outlineTitle: 'Abschnitte',
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/showcase/77006201'},
      { icon: 'github', link: 'https://github.com/flyocloud' }
    ],
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    nav: [
      { text: 'Dokumentation', link: '/home' },
      {
        text: 'Flyo',
        items: [
          {
            text: 'Cloud Login',
            link: 'https://flyo.cloud',
          },
          {
            text: 'Info Webseite',
            link: 'https://flyo.ch',
          },
        ]
      },
      {
        text: 'Infrastruktur',
        items: [
          {
            text: 'Status',
            link: 'https://status.flyo.cloud/',
          },
          {
            text: 'Changelog',
            link: '/changelog',
          }
        ]
      },
    ],
    sidebar: [
      {
        collapsed: false,
        text: 'Themen',
        items: [
          { text: 'Bilder', link: '/infos/images' },
          { text: 'Metriken', link: '/infos/metrics' },
          { text: 'Content Pools', link: '/infos/pools'},
          { text: 'Inhalt Mapping', link: '/infos/mapping'}
        ]
      },
      {
        collapsed: false,
        text: 'Integrationen',
        items: [
          { text: 'Embed', link: '/integrations/embed' },
          { text: 'Karte', link: '/integrations/map' },
          { text: 'Hook', link: '/integrations/hooks' },
          { text: 'API', link: '/integrations/api' },
          { text: 'API SDK', link: '/integrations/sdk' },
          { text: 'Webflow', link: '/integrations/webflow' },
          { text: 'SignageOS', link: '/integrations/signageos' },
          { text: 'Adobe Indesign', link: '/integrations/indesign' },
          { text: 'Mailjet', link: '/integrations/mailjet' },
          { text: 'Shopify', link: '/integrations/shopify' }
        ]
      },
      {
        collapsed: true,
        text: 'Nitro Headless CMS',
        items: [
          { text: 'Intro', link: '/nitrocms/' },
          { text: 'JavaScript', link: '/nitrocms/javascript' },
          { text: 'PHP', link: '/nitrocms/php' },
          { text: 'Vue', link: '/nitrocms/vue' }
        ]
      },
      {
        collapsed: true,
        text: 'Platformen',
        items: [
          { text: 'Nitro Frontend', link: '/platforms/nitro' },
          { text: 'Heartbeat Frontend', link: '/platforms/heartbeat' },
        ]
      }
    ]
  }
}
