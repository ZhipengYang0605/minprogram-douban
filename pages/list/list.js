import {network} from "./../../utils/network"
// pages/list/list.js
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
    let title = '';
    // 若数据没有加载出来，显示正在加载
    wx.showLoading({
      title: '正在拼命加载！'
    });
    if(type === 'movie'){
      // 请求电影数据(参数：callback/type/count)
      network.getMovieList({
        success: function(items){
          // 数据加载成功隐藏正在加载
          wx.hideLoading({});
          that.setData({
            items: items
          })
        },
        type: type,
        count: 1000
      });
      title = "电影";
    } else if(type === 'tv'){
      // 请求电视剧数据
      network.getTvList({
        success: function(items){
          // 数据加载成功隐藏正在加载
          wx.hideLoading({});
          that.setData({
            items: items
          });
        },
        type: type,
        count: 1000
      });
      title = "电视剧";
    }else{
      // 请求综艺数据
      network.getShowList({
        success: function(items){
          // 数据加载成功隐藏正在加载
          wx.hideLoading({});
          that.setData({
            items: items
          });
        },
        type: type,
        count: 1000
      });
      title = "综艺";
    }
    wx.setNavigationBarTitle({
      title: title,
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