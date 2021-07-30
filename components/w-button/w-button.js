// components/button/w-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnText: {
      type: String,
      value: "默认值"
    },
    width: {
      type: String,
      value: '666rpx'
    },
    height: {
      type: String,
      value: '93rpx'
    },
    types: {
      type: String,
      value: 'default'
    },
    br: {
      type: Boolean,
      value: false
    },
    bg: {
      type: String,
      value: '#1ea0f8'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bTrue: false,
    white: '1px solid #dfdede;color: #2680d5;background: #fff'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {

      this.triggerEvent('click');
    }
  },
  lifetimes: {
    attached() {
      if(this.data.types === 'white') {
        this.setData({
          bTrue: true,
          bg: 'unset'
        });
      }
    }
  }
})
