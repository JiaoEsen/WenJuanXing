// components/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(event) {
      console.log(event);
      this.triggerEvent('click', event.currentTarget.dataset.num);
    }
  }
})
