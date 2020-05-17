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
        if(params && params.success){
          params.success(res);
        }
      }
    });
  }
}
export {network}