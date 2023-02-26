---
abbrlink: 27888192
categories: Hexo
date: "2023/1/23 21:10:00"
tags: 分享
title: Hexo 插件推荐
---

## 一. [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)一键部署

### 1.安装

```shell
$ npm insatll hexo-deployer-git --save
```

### 2.配置

#### 单个仓库

```yml
deploy:
    type: git
    repo: <仓库链接>
    branch: <仓库分支>
```

#### 多个仓库

```yml
deploy:
    type: git
    repo:
        <仓库>: <仓库链接>,<仓库分支>
        <仓库>: <仓库链接>,<仓库分支>
```

### 3.使用

```shell
$ hexo deploy
```

## 二.[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)优化文章链接

### 1.安装

```shell
$ npm install hexo-abbrlink --save
```

### 2.配置

先修改\_config.yml

```diff
- permalink: :year/:month/:day/:title/
+ permalink: post/:abbrlink/
```

然后在添加以下配置

```yml
# abbrlink config
abbrlink:
  alg: crc32      #support crc16(default) and crc32
  rep: hex        #support dec(default) and hex
  drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
  # Generate categories from directory-tree
  # depth: the max_depth of directory-tree you want to generate, should > 0
  auto_category:
     enable: true  #true(default)
     depth:        #3(default)
     over_write: false 
  auto_title: false #enable auto title, it can auto fill the title by path
  auto_date: false #enable auto date, it can auto fill the date by time today
  force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink. This only updates abbrlink rather than other front variables.
```

## 三.[hexo-minify](https://github.com/lete114/hexo-minify)压缩博客文件

### 1.安装

```shell
$ npm install hexo-minify --save
```

### 2.配置

```yml
## Hexo-minify Default Config Options
minify:
  preview: false ## 本地预览时是否压缩
  exclude: ['*.min.*']
  js:
    enable: true
    ## 详细配置: https://github.com/terser/terser#minify-options
    options: {}
  css:
    enable: true
    ## 详细配置: https://github.com/clean-css/clean-css#compatibility-modes
    options: {}
  html:
    enable: true
    ## 详细配置: https://github.com/kangax/html-minifier#options-quick-reference
    options:
      minifyJS: true # Compressed JavaScript
      minifyCSS: true # CSS Compressed
      removeComments: true # Remove the comments
      collapseWhitespace: true # Delete any extra space
      removeAttributeQuotes: true # Delete attribute quotes
  image:
    enable: true
    svg:
      enable: true
      ## 详细配置: https://github.com/imagemin/imagemin-svgo#imageminsvgooptionsbuffer
      options: {}
    jpg:
      enable: true
      ## 详细配置: https://github.com/imagemin/imagemin-jpegtran#options
      options: {}
    png:
      enable: true
      ## 详细配置: https://github.com/imagemin/imagemin-pngquant#options
      options: {}
    gif:
      enable: true
      ## 详细配置: https://www.$ npmjs.com/package/imagemin-gifsicle#options
      options: {}
    webp:
      enable: true
      ## 详细配置: https://github.com/imagemin/imagemin-webp#options
      options: {}
  font:
    enable: false
    ## 详细配置: https://github.com/Lete114/fontmin-spider#api
    options: {}
```

## 四.[hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)自动生成 sitemap

### 1.安装
```shell
$ npm install hexo-generator-sitemap --save
```

### 2.配置

```yml
sitemap:
    path: sitemap.xml
    rel: true
    tags: true
    categories: true
```

## 六.[hexo-generator-readme-file](https://github.com/tcatche/hexo-generator-readme-file)自动生成 readme 文件

### 1.安装

```shell
$ npm install hexo-generator-readme-file --save
```

### 2.配置

```yml
readmeConfig:
    postsHeader: "## My posts" # headers, support markdown
    sort: "desc" # posts display sort: 'desc' or 'acs'. The default option is 'desc'
    groupType: "month" # 'month' or 'year' or 'none'. The default option is 'month'
```
