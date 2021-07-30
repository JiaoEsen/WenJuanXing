// pages/loginAuth/loginAuth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isK: false,
    startY: 0, //滑动开始y轴位置
    lastY: 0, //滑动开始y轴位置
    ain: 0,
    x: 0
  },
  onGetUserInfo() {
    // console.log(1);
    // wx.showLoading({
    //   title: '加载中',
    // })
    wx.getUserProfile({
      desc: 'desc',
      success: (res) => {
        console.log(res);
        wx.getSetting({
          withSubscriptions: true,
          success: (res) => {
            console.log(res);
            if (res.authSetting['scope.userInfo']) {
              wx.navigateTo({
                url: '/pages/index/index'
              });
            }
          }
        })

      },
      complete: () => {
        // wx.hideLoading({
        //   success: (res) => {},
        // })
      }
    })
  },
  onLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  kAni() {
    this.setData({
      isK: true
    })
  },
  touchStart(event) {
    console.log(event);
    // touchx: e.changedTouches[0].clientX;
    // touchy: e.changedTouches[0].clientY;
    this.setData({
      startY: event.changedTouches[0].clientY, 
      lastY: 0
    });

  },
  touchend(event) {
    console.log(event);
    let y = event.changedTouches[0].clientY;
    if(y - this.data.startY > 50 ){ //下滑
      console.log('下');
      this.setData({
        isK: false
      })
    }else if(y - this.data.startY < -50 ){ //上滑
      console.log('上');
    }
  },
  anifn() {
    const animation = wx.createAnimation({
      delay: 0,
      duration: 500
    });
    let a = true;
    setInterval(() => {
      if (a) {
        animation.translateY(15).step();
        a = !a;
      } else {
        animation.translateY(0).step();
        a = !a;
      }
      this.setData({
        ain: animation.export()
      })
    }, 500)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'title',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading({
      success: (res) => {},
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.anifn();
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