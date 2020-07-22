module.exports = {
  base: '/website/',
  themeConfig: {
    logo: 'https://user-images.githubusercontent.com/5960988/87894627-d6af0480-ca75-11ea-831f-f24d2719c622.png',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    repo: 'wxsms/uiv',
    repoLabel: 'Github',
    docsRepo: 'uiv-lib/website',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        title: 'Usage',
        path: '/usage/getting-started',
        collapsable: false,
        children: [
          '/usage/getting-started',
          '/usage/i18n'
        ]
      },
      {
        title: 'Components',
        path: '/components/affix',
        collapsable: false,
        children: [
          '/components/affix',
          '/components/collapse'
        ]
      }
    ]
  }
}
