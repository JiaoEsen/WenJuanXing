// pages/editForm/editForm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerTitle: "编辑表单",
    statusBarHeight: app.globalData.statusBarHeight,
    isAddClass: false
  },
  onClick(event) {
    // console.log(event);
    const { detail } = event;
    if (detail === 'a') {
      this.setData({
        isAddClass: true
      });
    } else if( detail === 'b' ) {
      wx.navigateTo({
        url: '/pages/wjSet/wjSet'
      })
    } else if ( detail === 'd' ) {
      wx.showModal({
        title: '保存成功',
        content: '问卷保存成功，是否立即发布',
        cancelText: '继续编辑',
        confirmText: '发布表单',
        mask: true
      })
    } else if ( detail === 'c' ) {
      wx.navigateTo({
        url: '/pages/preview/preview',
      })
    }
  },
  backAni() {
    this.setData({
      isAddClass: false
    });
  },
  hClick() {
    console.log(1);
    this.setData({
      isAddClass: false
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