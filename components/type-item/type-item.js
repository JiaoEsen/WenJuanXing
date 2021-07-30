// components/type-item/type-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
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
      const { obj } = event.currentTarget.dataset;
      console.log('类型');
      this.triggerEvent('click', obj);
    }
  }
})
