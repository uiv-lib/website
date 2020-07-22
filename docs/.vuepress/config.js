module.exports = {
  // cache: false,
  // base: '/website/',
  description: 'Bootstrap 3 components implemented by Vue 2.',
  head: [
    ['meta', { name: 'google-site-verification', content: 'ekuL5J7xK1IdFtP13v3KxpuGKnYS1oCT9PvZdjYm8Eg' }],
    ['meta', {
      name: 'keywords',
      content: 'Bootstrap,Vue,JavaScript,HTML,CSS,Components,Directives,UI,Affix,MessageBox,Notification,ScrollSpy,Alert,Button,ButtonGroup,Breadcrumbs,Carousel,Collapse,DatePicker,Dropdown,Modal,Pagination,Popover,ProgressBar,Tabs,TimePicker,Tooltip,Typeahead,AutoComplete,MultiSelect,Navbar'
    }]
  ],
  title: 'uiv',
  plugins: ['@vuepress/active-header-links'],
  themeConfig: {
    logo: '/assets/image/logo.png',
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
        collapsable: false,
        children: [
          '/usage/getting-started',
          '/usage/i18n'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/affix',
          '/components/alert',
          '/components/collapse'
        ]
      }
    ]
  }
}
