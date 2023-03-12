---
abbrlink: ''
categories:
- - Hexo
date: '2023-03-12 14:26:01'
tags:
- 教程
title: Github Action 全自动部署博客
updated: Sun, 12 Mar 2023 07:41:51 GMT
---
## Github Action 简介

> GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

使用Github Action自动部署的好处：

1. 简化写文章流程
2. 自动生成静态资源文件并部署
3. 减少本地生成的资源占用

## 配置

1. 博客源代码文件夹下创建：

```text
.github/workflows/hexo.yml
```

2. 填入以下内容：

```yaml
name: Deploy Hexo site to Pages

on:
  push:
    branches: ["master"]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Use Node.js 18.x
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Cache NPM dependencies
        uses: actions/cache@v3
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build with Hexo
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

配置完成后，源文件更新便会自动构建部署

## 说明

1. {% label master red %}：源代码所在分支
2. {% label node-version red %}：NodeJs版本

