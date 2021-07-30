// components/header/header.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerTitle: {
      type: String,
      value: '默认值'
    },
    touch: {
      type: String,
      value: 'back'
    },
    isBack: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: App.globalData.statusBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      const { touch } = this.data;
      if (touch === 'back') {
        wx.navigateBack();
        console.log('跳转');
      } else if (touch === 'click') {
        // this.triggerEvent('click');
        console.log('点击');
      }
    }
  }
})
