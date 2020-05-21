const globalUrls = {
  // 首页数据接口
  movieList: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  tvList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
  showList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
  // 详情数据接口
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  // 标签请求接口
  movieTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/"+ id +"/tags?count=8"
  },
  tvTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/tv/"+id+"/tags?count=8"
  },
  showTags: function(id){
    return this.tvTags(id);
  },
  // 请求评论接口
  movieComments: function(id,start=0,count=3){
    return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start;
  },
  tvComments: function(id,start=0,count=3){
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },
  showComments: function(id,start=0,count=3){
    return this.tvComments(id,start,count);
  },
}
export {globalUrls}