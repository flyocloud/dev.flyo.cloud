export default {
  title: 'Flyo Helpcenter',
  description: 'Flyo Helpcenter',
  lang: 'de-DE',
  cleanUrls: true,
  themeConfig: {
    externalLinkIcon: true,
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/flyocloud/dev.flyo.cloud/edit/main/docs/:path',
      text: 'Diese Seite auf GitHub bearbeiten'
    },
    siteTitle: 'Docs',
    logo: {light: '/assets/logo.png', dark: '/assets/logodark.png'},
    outlineTitle: 'Abschnitte',
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/77006201'},
      { icon: 'github', link: 'https://github.com/flyocloud' },
      { icon: 'youtube', link: 'https://www.youtube.com/@flyocloud'},
    ],
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    footer: {
      message: 'All rights reserved. Proudly developed in Switzerland by Heartbeat GmbH.'
    },
    nav: [
      { text: 'ℹ️ Allgemeines', link: '/dev/', activeMatch: '/dev/'},
      { text: '🚀 Integrationen', link: '/integrations/', activeMatch: '/integrations/'},
      { text: '🐼 Nitro CMS', link: '/nitro/', activeMatch: '/nitro/' },
      {
        text: 'Flyo',
        items: [
          { text: '📚 Helpcenter', link: 'https://flyo.zendesk.com/hc' },
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
    sidebar: {
      '/dev/': [
        {
          items: [
            { text: 'Voraussetzung & Glossar', link: '/dev/index'},
            { text: 'Bilder', link: '/dev/infos/images' },
            { text: 'Metriken', link: '/dev/infos/metrics' },
            { text: 'Content Pools', link: '/dev/infos/pools'},
            { text: 'Inhalt Mapping', link: '/dev/infos/mapping'},
            { text: 'Rate Limit', link: '/dev/infos/ratelimit'},
            { text: 'Template Engine', link: '/dev/infos/template'},
            { text: 'WYSIWYG Editor', link: '/dev/infos/wysiwyg'},
          ]
        },
      ],
      '/integrations/': [
        {
          items: [
            { text: 'Integrationen', link: '/integrations/' },
            { text: 'Auslöser Verzögerung', link: '/integrations/delay' },
          ]
        },
        {
          text: 'Integrations-Typen',
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
            { text: 'Shopify', link: '/integrations/shopify' },
            { text: 'Venue', link: '/integrations/venue' },
          ]
        },
      ],
      '/nitro/': [
        {
          items: [
            { text: 'Grundlagen', link: '/nitro/' },
            { text: 'API-Reference', link: 'https://nitro-openapi.flyo.cloud/'}
          ]
        },
        {
          text: "Konzepte",
          items: [
            {text: 'Config', link: '/nitro/config'},
            {text: 'Tokens / Environments', link: '/nitro/env'},
            {text: 'Seiten', link: '/nitro/pages'},
            {text: 'Blocks / Komponenten', link: '/nitro/block'},
            {text: 'Entitäten', link: '/nitro/entities'},
            {text: 'Routing', link: '/nitro/routing'},
            {text: 'Suchen', link: '/nitro/search'},
            {text: 'Sitemaps', link: '/nitro/sitemap'},
          ]
        },
        {
          text: "SDKs",
          items: [
            { text: 'PHP', link: '/nitro/php' },
            { text: 'JavaScript', link: '/nitro/javascript' },
            { text: 'Vue', link: '/nitro/vue' },
            { text: 'Astro', link: '/nitro/astro' },
          ]
        },
      ]
    }
  }
}
