// pages/comment/comment.js
import { network } from "./../../utils/network"
Page({
  data: {
    start: 1,
    count: 20,
  },
  onLoad: function (options) {
    let that = this;
    // 将detail页面传过来的数据保存
    // options: type/id/total/coverimg/title/rate
    that.setData({
      options: options
    });
    // 获取评论数据
    // 需要传入的参数params: id/type/start/count
    // 封装获取评论函数
    this.getCommentData(1);
  },
  getCommentData: function (start) {
    let that = this;
    if(start > this.data.start){
      that.setData({
        nextLoading: true
      })
    } else if (start < this.data.start) {
      that.setData({
        preLoading: true
      })
    }
    network.getComments({
      id: that.options.id,
      type: that.options.type,
      start: start,
      count: this.data.count,
      callback: function (data) {
        let comments = data.interests;
        that.setData({
          comments: comments,
          start: start,
          nextLoading: false,
          preLoading: false
        });
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    })
  },
  // 点击上一页
  onPrePageTap: function (event) {
    let oldStart = this.data.start;
    let start = oldStart - this.data.count;
    if(start >= 1) {
      this.getCommentData(start);
    }
  },
  // 点击下一页
  onNextPageTap: function (event) {
    let oldStart = this.data.start;
    let start = oldStart + this.data.count;
    this.getCommentData(start);
  },
})