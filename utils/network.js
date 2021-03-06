import {globalUrls} from "./utils"
const network = {
  getMovieList: function(params){
    // 请求电影数据
    params.type = 'movie';
    this.getItemlist(params);
  },
  getTvList: function(params){
    // 请求电视剧数据
    params.type = 'tv';
    this.getItemlist(params);
  },
  getShowList: function(params){
    // 请求综艺数据
    params.type = 'show';
    this.getItemlist(params);
  },
  // 重构--传入的params包括count/type/callback
  // 获取列表
  getItemlist: function(params){
    let count = params.count || 7;
    let type = params.type;
    let url = '';
    // 判断type的类型
    if(type === 'movie'){
      url = globalUrls.movieList;
    } else if(type === 'tv') {
      url = globalUrls.tvList;
    } else {
      url = globalUrls.showList;
    }
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function(res){
        let items = res.data.subject_collection_items;
        // 解决首页点击更多，flex布局出现的问题
        if(items.length % 3 == 2){
          items.push(null);
        }
        if(params && params.success){
          params.success(items);
        }
      }
    });
  },

  // 获取详情
  getItemDetail: function (params) {
    let id = params.id;
    let type = params.type;
    let url = '';
    if(type === 'movie'){
      url = globalUrls.movieDetail + id;
    } else if(type === 'tv'){
      url = globalUrls.tvDetail + id;
    } else {
      url = globalUrls.showDetail + id;
    }
    // 发起请求
    wx.request({
      url: url,
      success: function (res){
        let item = res.data;
        if(params.callback) {
          params.callback(item);
        }
      }
    })
  },
  // 获取标签
  getItemTags: function(params){
    let id = params.id;
    let type = params.type;
    let url = '';
    if(type === 'movie'){
      url = globalUrls.movieTags(id);
    } else if (type==='tv') {
      url = globalUrls.tvTags(id);
    } else{
      url = globalUrls.showTags(id);
    }
    // 发起请求
    wx.request({
      url: url,
      success: function(res){
        if(params.callback){
          let data = res.data.tags;
          params.callback(data);
        }
      }
    })
  },
  // 获取评论数据
  getComments: function(params){
    let id = params.id;
    let type = params.type;
    let url = '';
    let start = params.start || 0;
    let count = params.count || 3;
    if(type === 'movie'){
      url = globalUrls.movieComments(id, start, count);
    } else if (type==='tv') {
      url = globalUrls.tvComments(id, start, count);
    } else{
      url = globalUrls.showComments(id, start, count);
    }
    // 发起请求
    wx.request({
      url: url,
      success: function(res){
        let data = res.data;
        if(params.callback){
          params.callback(data);
        }
      }
    })
  },
  // 获取搜索结果
  getSearchs: function(params){
    let q = params.value;
    let url = globalUrls.searchUrl(q);
    console.log(url);
    if(params.callback){
      wx.request({
        url: url,
        success: function(res){
          let data = res.data.subjects;
          params.callback(data);
        }
      })
    }
  },


}
export {network}