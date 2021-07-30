// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.23201,
    longitude: 116.127129,
    minScale: 3,
    maxScale: 30,
    showCompass: true, // 显示指南针
    showScale: true, // 显示比例尺
    markers: [{
      id: 1,
      longitude: 116.127129,
      latitude: 40.23201,
      title: '北京工商管理专修学院',
      iconPath: '/img/location.png',
      width: 50,
      height: 50,
      callout: {
        content: '这里是北京工商管理专修学院 - 成人成才教育同步专家',
        padding: 10,
        borderRadius: 5
      }
    }],
    polyline: [{
      points: [{
          latitude: 40.23305,
          longitude: 116.147129,
        },
        {
          latitude: 40.23475794833173,
          longitude: 116.12303594904326,
        }
      ],
      color: "#FA6400",
      width: 3,
      arrowLine: true,
      borderWidth: 2 //线的边框宽度，还有很多参数，请看文档 
    }],
    // covers: [{
    //   longitude: 116.127129,
    //   latitude: 40.23201,
    //   iconPath: '/image/location.png'
    // }]
  },
  getuserinfo(event) {
    console.log(event);
  },
  getInfo() {
    wx.getUserProfile({
      desc: '测试',
      success: (res) => {
        console.log(res);
      }
    })
  },
  getuser() {
    wx.getSetting({
      withSubscriptions: true,
      success(res) {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {

        }
      }
    })
  },
  getloaction(event) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  getloactionSetting() {
    wx.openSetting({
      withSubscriptions: true,
      success: (res) => {
        // console.log(res);
        // const { longitude, latitude } = res;
        // const { loaction } = this.data;
        // location.latitude = latitude;
        // loaction.longitude = longitude;
        // console.log(location);
        // this.setData({
        //   loaction: loaction
        // });  
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getloaction();

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