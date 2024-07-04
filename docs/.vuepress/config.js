module.exports = {
  lang: 'zh-CN',
  title: 'React教程',
  description:
    'React是用于构建用户界面的JavaScript库，起源于Facebook(现meta)的内部项目，由于市场上所有 JavaScript框架不满意，决定自行开发一套，用于Instagram的网站。于2013年5月开源。',
  base: '/react-docs/',
  themeConfig: {
    logo: '/images/mylogo.png', // 首页左上角logo
    collapsable: false,
    navbar: [
      {
        text: 'react基础',
        link: '/react_basic',
      },
      {
        text: 'redux(状态管理)',
        link: '/redux/intro',
      },
      {
        text: 'react-router(路由)',
        link: '/react-router/spa',
      },
    ],
    sidebar: {
      '/react_basic/': [
        {
          text: 'react基本使用',
          link: '/react_basic/basic_use/first_use',
          children: [
            {
              text: '在html中引入和使用',
              link: '/react_basic/basic_use/first_use',
              children: [
                {
                  text: '特殊属性',
                  link: '/react_basic/basic_use/first_use#特殊属性',
                },
              ],
            },
            {
              text: 'JSX',
              link: '/react_basic/basic_use/jsx',
              collapsable: false,
              children: [
                {
                  text: '介绍',
                  link: '/react_basic/basic_use/jsx#介绍',
                },
                {
                  text: '注意点',
                  link: '/react_basic/basic_use/jsx#注意点',
                },
                {
                  text: '动态插入数据',
                  link: '/react_basic/basic_use/jsx#动态插入数据',
                },
                {
                  text: '条件渲染',
                  link: '/react_basic/basic_use/jsx#条件渲染',
                },
                {
                  text: '列表渲染',
                  link: '/react_basic/basic_use/jsx#列表渲染',
                },
                {
                  text: '添加行内样式',
                  link: '/react_basic/basic_use/jsx#添加行内样式',
                },
                {
                  text: '绑定事件',
                  link: '/react_basic/basic_use/jsx#绑定事件',
                },
                {
                  text: '案例练习',
                  link: '/react_basic/basic_use/jsx#案例练习',
                },
              ],
            },
          ],
        },
        {
          text: 'create-react-app',
          link: '/react_basic/create-react-app',
        },
        {
          text: '组件',
          link: '/react_basic/component/intro',
          children: [
            {
              text: '组件介绍&使用',
              link: '/react_basic/component/intro',
            },
            {
              text: '类组件的状态',
              link: '/react_basic/component/state',
            },
            {
              text: '类组件中函数的 this 问题',
              link: '/react_basic/component/this',
            },
            {
              text: 'props',
              link: '/react_basic/component/props',
            },
            {
              text: '组件案例-任务列表(todoList)',
              link: '/react_basic/component/todoList',
            },
            {
              text: '操作表单',
              link: '/react_basic/component/form',
            },
            {
              text: '类组件的生命周期',
              link: '/react_basic/component/life',
            },
            {
              text: '组件通讯',
              link: '/react_basic/component/communication',
            },
          ],
        },
        {
          text: 'HOC 和 renderprops',
          link: '/react_basic/hoc&rp',
          children: [
            {
              text: 'HOC',
              link: '/react_basic/hoc&rp#高阶组件-hoc',
            },
            {
              text: 'renderprops',
              link: '/react_basic/hoc&rp#renderprops',
            },
          ],
        },
        {
          text: 'HOOK',
          link: '/react_basic/hook',
        },
        {
          text: '性能优化',
          link: '/react_basic/performance',
        },
        {
          text: '虚拟DOM和diff算法',
          link: '/react_basic/diff',
        },
        {
          text: '其他',
          link: '/react_basic/others',
          children: [
            {
              text: 'Fragment',
              link: '/react_basic/others#fragment',
            },
            {
              text: 'Portals',
              link: '/react_basic/others#portals',
            },
            {
              text: 'forwardRef',
              link: '/react_basic/others#forwardref',
            },
            {
              text: '组件懒加载',
              link: '/react_basic/others#组件懒加载',
            },
            {
              text: '国际化',
              link: '/react_basic/others#国际化',
            },
          ],
        },
      ],
      '/react-router/': [
        {
          text: '单页面应用',
          link: '/react-router/spa',
        },
        {
          text: 'react-router使用',
          link: '/react-router/router-basic',
        },
        {
          text: '编程式导航',
          link: '/react-router/navigate',
        },
        {
          text: '路由传参',
          link: '/react-router/router-params',
        },
        {
          text: '通过路由表定义路由规则',
          link: '/react-router/useRoutes',
        },
        {
          text: '其他组件',
          link: '/react-router/others',
        },
        {
          text: '案例',
          link: '/react-router/demo',
        },
      ],
      '/redux/': [
        {
          text: 'redux介绍',
          link: '/redux/intro',
        },
        {
          text: 'redux旧版语法',
          link: '/redux/old',
          children: [
            {
              text: 'redux的基本使用',
              link: '/redux/old#redux-的基本使用',
            },
            {
              text: 'redux-thunk',
              link: '/redux/old#redux-thunk',
            },
            {
              text: 'chrome的redux插件',
              link: '/redux/old#chrome-的-redux-插件',
            },
            {
              text: 'combineReducers',
              link: '/redux/old#combinereducers',
            },
            {
              text: 'redux使用规范',
              link: '/redux/old#redux-的使用规范',
            },
          ],
        },
        {
          text: 'react-redux',
          link: '/redux/react-redux',
        },
        {
          text: 'redux新版语法',
          link: '/redux/new',
          children: [
            {
              text: '基本使用',
              link: '/redux/new#基本使用',
            },
            {
              text: '异步操作',
              link: '/redux/new#异步操作',
            },
            {
              text: '解决TS编译失败的问题',
              link: '/redux/new#解决-ts-编译失败的问题',
            },
          ],
        },
      ],
    },
    lastUpdated: false,
    contributors: false,
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
}
