export default {
  '/about/': getApiSidebar(),
  '/Usage/': getComponentsSidebar(),
  '/Config/': getGuideSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '🏅关于我们',
      collapsible: true,
      items: [
        {
          text: 'AP-Plugin开发组',
          link: '/about/'
        },
      ]
    }
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '🎲使用文档',
      collapsible: true,
      items: [
        {
          text: '使用文档',
          link: '/Usage/'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '🛠️配置文档',
      collapsible: true,
      items: [
        {
          text: ' - 绘图接口部署相关说明',
          link: '/Config/docs1'
        },
        {
          text: ' - 绘图服务端部署文档',
          link: '/Config/docs2'
        },
        {
          text: ' - 大清晰术接口文档',
          link: '/Config/docs3'
        },
        {
          text: ' - 鉴赏图片参考文档',
          link: '/Config/docs4'
        },
        {
          text: ' - AI鉴定参考文档',
          link: '/Config/docs5'
        },
        {
          text: ' - 去背景参考文档',
          link: '/Config/docs6'
        },
        {
          text: ' - 图片动漫化参考文档',
          link: '/Config/docs7'
        },
        {
          text: ' - 图片转音乐参考文档',
          link: '/Config/docs8'
        },
        {
          text: ' - 动漫审美预测参考文档',
          link: '/Config/docs9'
        },
        {
          text: ' - 百度翻译服务配置文档',
          link: '/Config/docs10'
        },
        {
          text: ' - 有道翻译服务配置文档',
          link: '/Config/docs11'
        },
        {
          text: ' - 百度图片审核服务配置文档',
          link: '/Config/docs12'
        },
        {
          text: ' - GPT生成Prompt配置文档',
          link: '/Config/docs13'
        }
      ]
    }
  ]
}

