// pages/index/index.js
import {network} from "./../../utils/network"
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
    // 请求电影数据
    network.getMovieList({
      success: function(res){
        // let movies = res.data.subject_collection_items;
        let movies = res;
        that.setData({
          movies: movies
        })
      }
    });

    // 请求电视剧数据
    network.getTvList({
      success: function(res){
        // let tvs = res.data.subject_collection_items;
        let tvs = res;
        that.setData({
          tvs: tvs
        })
      }
    });
    // 请求综艺数据
    network.getShowList({
      success: function(res){
        // let shows = res.data.subject_collection_items;
        let shows = res;
        that.setData({
          shows: shows
        })
      }
    });
  },
})