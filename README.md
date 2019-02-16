# 启动项目
## `npm start`

# 打包项目
## `npm run build`

# 项目结构
```
┌── build                                         项目打包内容
├── README.md                                     项目简要描述
├── config                                        配置相关
│   ├── theme.js                                  主题配置
│   └── webpack.config.js                         webpack配置
├── package.json                                  项目依赖
├── public                                        静态资源
│   ├── favicon.ico                               ico
│   └── index.html                                页面入口
├── scripts                                       环境相关
├── src                                           业务代码
│   ├── App.js                                    App.js
│   ├── axios                                     axios简单封装
│   ├── components                                公共组件
│   │   ├── header                                公共header组件
│   │   └── index.js                              公共组件入口js
│   ├── configStore.js                            redux相关配置
│   ├── images                                    图片
│   ├── index.js                                  入口js
│   ├── pages                                     页面
│   │   ├── error                                 error页面
│   │   │   ├── index.js                          error js
│   │   │   └── index.scss                        error scss
│   │   ├── home                                  home页面
│   │   │   ├── components                        home 组件
│   │   │   │   └── index.js                      home 组件 入口js
│   │   │   ├── index.js                          home js
│   │   │   └── index.scss                        home scss
│   │   └── special                               special 页面
│   │       ├── index.js                          special js
│   │       └── store                             special store
│   │           ├── action.js                     special action
│   │           ├── constants.js                  special constants
│   │           ├── index.js                      special store 入口js
│   │           ├── model.js                      special 接口地址
│   │           └── reducer.js                    special reducer
│   ├── routes                                    路由routes
│   ├── store                                     store
│   │   ├── common                                公共store
│   │   ├── index.js                              store配置
│   │   └── reducers.js                           reducers
│   ├── style                                     styles
│   │   ├── common.scss                           公共scss
│   │   ├── config.scss                           颜色等配置scss
│   │   ├── index.scss                            styles 入口
│   │   ├── mixin.scss                            mixin
│   │   ├── rem.scss                              px to rem
│   │   └── reset.scss                            reset scss
│   └── utils                                     工具函数
│       ├── loading.js                            loading
│       └── storage.js                            本地存储
└── yarn.lock                                     依赖安装
