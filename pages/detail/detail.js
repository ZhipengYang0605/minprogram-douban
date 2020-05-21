// pages/detail/detail.js
import {network} from './../../utils/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let type = options.type;
    let id = options.id;
    // 将type/id保存到data中
    this.setData({
      type: type,
      id: id
    })
    // 获取详情数据
    network.getItemDetail({
      id: id,
      type: type,
      callback: function (item) {
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
    // 获取标签数据
    network.getItemTags({
      type: type,
      id: id,
      callback: function(data){
        that.setData({
          tags: data
        })
      }
    });
    // 获取评论数据
    network.getComments({
      type: type,
      id: id,
      callback: function(data){
        let count = data.total;
        let comments = data.interests;
        that.setData({
          comments: comments,
          count: count
        })
      }
    })
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
    wx.pageScrollTo({
      scrollTop:0
    })
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