// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerTitle: '登录页面_问卷星',
    statusBarHeight: app.globalData.statusBarHeight,
    account: '',
    pwd: '',
    currentIndex: 0
  },
  login() {
    const { account, pwd } = this.data;
    if ( account === '18210614234' && pwd === '123456' ) {
      wx.showToast({
        title: '登录成功',
        duration: 1000
      });
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },1500);
    } 
    
  },
  onTab(event) {
    const { id } = event.target.dataset;
    this.setData({
      currentIndex: +id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})