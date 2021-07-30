// pages/createForm/createForm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerTitle: "创建表单",
    statusBarHeight: app.globalData.statusBarHeight,
    topBarlist: ['全部', '活动报名', '签到', '信息反馈', '订单'],
    formList: [{
      id: 1,
      name: '聚会报名表',
      num: 5
    },{
      id: 2,
      name: '志愿者报名表',
      num: 5
    },{
      id: 3,
      name: '速享卡丁车耐力赛报名表',
      num: 5
    },{
      id: 4,
      name: '员工才艺大赛报名表',
      num: 5
    },{
      id: 5,
      name: '社团招新报名表',
      num: 5
    },]
  },
  onClick(event) {
    wx.navigateTo({
      url: '/pages/partyForm/partyForm',
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