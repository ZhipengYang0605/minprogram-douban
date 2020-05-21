// pages/detail/detail.js
import {network} from './../../utils/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let type = options.type;
    let id = options.id;
    network.getItemDetail({
      id: id,
      type: type,
      callback: function (item) {
        console.log(item);
        console.log(item.rating.value);
        item.genres = item.genres.join('/');
        // 拼接导演和演员列表
        item.directors = item.directors[0].name;
        let actorName = [];
        item.actors.forEach(function(actor, index){
          if(index < 3) {
            actorName.push(actor.name);
          }
        });
        item.actorName = actorName.join('/');
        item.nameList = item.directors+ '(导演)' + '/' + item.actorName;
        // 存储数据
        that.setData({
          item: item
        });
      }
    });
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