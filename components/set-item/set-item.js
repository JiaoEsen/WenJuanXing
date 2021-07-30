// components/set-item/set-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isBr: {
      type: Boolean,
      value: false
    },
    itemText: {
      type: String,
      value: "默认标题"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    border: 'none'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setIsBr() {
      if (this.data.isBr) {
        this.setData({
          border: '1rpx solid #eaeaea'
        });
      };
    }
  },
  lifetimes: {
    
    attached() {
      console.log(this.data.isBr);

      this.setIsBr();
    }
  }
})
