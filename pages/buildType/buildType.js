// pages/buildType/buildType.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerTitle: "选择创建类型",
    statusBarHeight: app.globalData.statusBarHeight,
    typeList: [{
      id: 1,
      name: '调查',
      pic: '丰富题型，强大逻辑',
      img: '../../img/BrowserPreview_tmp_03.jpg'
    },{
      id: 2,
      name: '调查',
      pic: '丰富题型，强大逻辑',
      img: '../../img/BrowserPreview_tmp_05.jpg'
    },{
      id: 3,
      name: '调查',
      pic: '丰富题型，强大逻辑',
      img: '../../img/BrowserPreview_tmp_09.jpg'
    },{
      id: 4,
      name: '调查',
      pic: '丰富题型，强大逻辑',
      img: '../../img/BrowserPreview_tmp_11.jpg'
    }]
  },
  onClick(event) {
    console.log(event);
    const obj = event.detail;
    wx.navigateTo({
      url: '/pages/createForm/createForm',
    })
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