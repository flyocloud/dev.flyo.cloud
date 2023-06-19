export default {
  title: 'Flyo Developer-Ressourcen',
  description: 'Flyo Developer-Ressourcen',
  lang: 'de-DE',
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/flyocloud/dev.flyo.cloud/edit/main/docs/:path',
      text: 'Diese Seite auf GitHub bearbeiten'
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
    footer: {
      message: 'All rights reserved. Proudly developed in Switzerland by Heartbeat GmbH.'
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
        collapsed: true,
        text: 'Allgemeines',
        items: [
          { text: 'Home', link: '/home'},
          { text: 'Bilder', link: '/infos/images' },
          { text: 'Metriken', link: '/infos/metrics' },
          { text: 'Content Pools', link: '/infos/pools'},
          { text: 'Inhalt Mapping', link: '/infos/mapping'},
          { text: 'Rate Limit', link: '/infos/ratelimit'}
        ]
      },
      {
        collapsed: true,
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
        text: 'Nitro',
        items: [
          { text: 'Grundlagen', link: '/nitro/' },
          { text: 'Konzepte', link: '/nitro/concepts' },
          { text: 'JavaScript', link: '/nitro/javascript' },
          { text: 'PHP', link: '/nitro/php' },
          { text: 'Vue', link: '/nitro/vue' }
        ]
      },
      {
        collapsed: true,
        text: 'Platformen',
        items: [
          { text: 'Webseite Baukasten', link: '/platforms/nitro' },
          { text: 'Heartbeat Frontend', link: '/platforms/heartbeat' },
        ]
      }
    ]
  }
}
