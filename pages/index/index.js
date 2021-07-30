// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight
  },
  getNavHeight() {
    const query = wx.createSelectorQuery();
    query.select('.header').boundingClientRect();
    // query.selectViewport().scrollOffset();
    query.exec((res) => {
      console.log(res);
    });
  },
  onLoad() {
    this.getNavHeight();
    console.log(wx.getMenuButtonBoundingClientRect());
  },

})
