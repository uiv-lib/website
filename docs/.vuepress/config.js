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
  plugins: {
    '@vuepress/active-header-links': null,
    'redirect': {
      redirectors: [
        {
          base: '/usage/',
          alternative: ['getting-started']
        },
        {
          base: '/components/',
          alternative: ['btn']
        }
      ]
    }
  },
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
      { text: 'Home', link: '/' },
      { text: 'Usage', link: '/usage/' },
      { text: 'Components', link: '/components/' }
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
          {
            title: 'Basic',
            collapsable: false,
            children: [
              '/components/btn',
              '/components/btn-group',
              '/components/collapse'
            ]
          },
          {
            title: 'Popup',
            collapsable: false,
            children: [
              '/components/dropdown',
              '/components/modal',
              '/components/tooltip',
              '/components/popover'
            ]
          },
          {
            title: 'Form',
            collapsable: false,
            children: [
              '/components/multi-select',
              '/components/typeahead',
              '/components/date-picker',
              '/components/time-picker'
            ]
          },
          {
            title: 'Notice',
            collapsable: false,
            children: [
              '/components/alert',
              '/components/notification',
              '/components/message-box'
            ]
          },
          {
            title: 'Navigation',
            collapsable: false,
            children: [
              '/components/navbar',
              '/components/tabs',
              '/components/breadcrumbs'
            ]
          },
          {
            title: 'Indicator',
            collapsable: false,
            children: [
              '/components/pagination',
              '/components/progress-bar'
            ]
          },
          {
            title: 'Others',
            collapsable: false,
            children: [
              '/components/carousel',
              '/components/affix',
              '/components/scroll-spy'
            ]
          }
        ]
      }
    ]
  }
}
