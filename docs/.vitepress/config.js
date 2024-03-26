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
      { text: '⚡ Entwickler', link: '/dev/' },
      { text: '📚 Helpcenter', link: 'https://flyo.zendesk.com/hc' },
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
    sidebar: {
      '/dev/': [
        {
          collapsed: false,
          text: 'Allgemeines',
          items: [
            { text: 'Home', link: '/dev/index'},
            { text: 'Bilder', link: '/dev/infos/images' },
            { text: 'Metriken', link: '/dev/infos/metrics' },
            { text: 'Content Pools', link: '/dev/infos/pools'},
            { text: 'Inhalt Mapping', link: '/dev/infos/mapping'},
            { text: 'Rate Limit', link: '/dev/infos/ratelimit'},
            { text: 'Template Engine', link: '/dev/infos/template'},
            { text: 'WYSIWYG Editor', link: '/dev/infos/wysiwyg'},
          ]
        },
        {
          collapsed: false,
          text: 'Integrationen',
          items: [
            { text: 'Embed', link: '/dev/integrations/embed' },
            { text: 'Karte', link: '/dev/integrations/map' },
            { text: 'Hook', link: '/dev/integrations/hooks' },
            { text: 'API', link: '/dev/integrations/api' },
            { text: 'API SDK', link: '/dev/integrations/sdk' },
            { text: 'Webflow', link: '/dev/integrations/webflow' },
            { text: 'SignageOS', link: '/dev/integrations/signageos' },
            { text: 'Adobe Indesign', link: '/dev/integrations/indesign' },
            { text: 'Mailjet', link: '/dev/integrations/mailjet' },
            { text: 'Shopify', link: '/dev/integrations/shopify' },
            { text: 'Webseite Baukasten', link: '/dev/integrations/websitebuilder' },
          ]
        },
        {
          collapsed: false,
          text: 'Nitro Headless CMS',
          items: [
            { text: 'Grundlagen', link: '/dev/nitro/' },
            {
              text: "Konzepte",
              items: [
                {text: 'Config', link: '/dev/nitro/config'},
                {text: 'Environments', link: '/dev/nitro/env'},
                {text: 'Blocks', link: '/dev/nitro/block'},
                {text: 'Routing', link: '/dev/nitro/routing'},
                {text: 'Entitäten', link: '/dev/nitro/entities'},
                {text: 'Seiten Eigenschaften', link: '/dev/nitro/properties'},
                {text: 'Suchen', link: '/dev/nitro/search'},
                {text: 'Sitemaps', link: '/dev/nitro/sitemap'},
              ]
            },
            {
              text: "SDKs",
              collapsed: true,
              items: [
                { text: 'PHP', link: '/dev/nitro/php' },
                { text: 'JavaScript', link: '/dev/nitro/javascript' },
                { text: 'Vue', link: '/dev/nitro/vue' },
                { text: 'Astro', link: '/dev/nitro/astro' },
              ]
            },
          ]
        }
      ]
    }
  }
}
