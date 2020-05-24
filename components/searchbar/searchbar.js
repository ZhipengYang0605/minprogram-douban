// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator: {
      type: Boolean,
      value: false
    }
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  methods: {
    onInputEvent: function(event){
      let value = event.detail.value;
      let detail = {"value": value};
      let options = {};
      this.triggerEvent("searchinput", detail, options);
    }
  }
})