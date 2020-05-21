// components/stars/stars.js
Component({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 组件属性
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      // 监听属性改变
      observer(newvalue, oldvalue, changepath){
        this.updateRate();
      }
    },
    starsize: {
      type: Number,
      value: 20 //rpx
    },
    fontsize: {
      type: Number,
      value: 20 //rpx
    },
    fontcolor: {
      type: String,
      value: "#ccc"
    },
    isText: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    updateRate: function(){
      // 获取评分
      let rate = this.properties.rate;
      let intRate = parseInt(rate);
      // 计算五星/半星/灰星的数量
      let light = parseInt(intRate / 2);
      let half = intRate % 2;
      let gray = 5 - light - half;
      // 创建数组
      let lights = [], halfs = [], grays = [];
      for(let i = 0; i < light; i++){
        lights.push(i+1);
      }
      for(let i = 0; i < half; i++){
        halfs.push(i+1);
      }
      for(let i = 0; i < gray; i++){
        grays.push(i+1);
      }
      // 动态设置text内容
      let ratetext = rate && rate > 0 ? rate.toFixed(1) : "未评分";
      // 修改数据
      this.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetext: ratetext
      })
    }
  },
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function(){
      this.updateRate();
    }
  }
})