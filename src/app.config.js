export default {
  pages: [
    'pages/home/index',
    'pages/message/index',
    'pages/mine/index',
    'pages/index/index'
  ],
  tabBar: {
    custom:true,
    color: '#a1a7b3',
    selectedColor: '#1492ff',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: 'home',
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/home_blue.png',
      },
      {
        pagePath: 'pages/message/index',
        text: 'message',
        iconPath: 'assets/chat.png',
        selectedIconPath: 'assets/chat_blue.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: 'mine',
        iconPath: 'assets/user.png',
        selectedIconPath: 'assets/user_blue.png',
      }
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
