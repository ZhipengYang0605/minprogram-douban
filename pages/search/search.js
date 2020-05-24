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
    wx.getStorage({
      key: 'searched',
      success: function(res){
        that.setData({
          histories: res.data
        })
      }
    })
  },
  // 组件searchbar传值
  onSearchInputEvent: function(event){
    let that = this;
    let value = event.detail.value;
    if(value){
      network.getSearchs({
        value: value,
        callback: function(data){
          console.log(data);
          that.setData({
            subjects: data
          })
        }
      }) 
    } else{ //若搜索内容为空，清空搜索结果列表
      that.setData({
        subjects: null
      })
    }
    
  },
  // 点击搜索结果进入详情页面
  onItemTapEvent: function(event){
    let id = event.currentTarget.dataset.id;
    let title = event.currentTarget.dataset.title;
    let histories = this.data.histories || [];
    let isUnshift = true;
    if(histories){
      histories.forEach(function(item){
        if(item.id === id){ //点击的是相同的item
          isUnshift = false;
        }
      })
    }
    if(isUnshift){
      histories.unshift({
        id: id,
        title: title
      });
    }
    
    // 保存点击数据
    wx.setStorage({
      data: histories,
      key: 'searched',
      success: function(){
        console.log("保存数据成功！");
      }
    })
    // 跳转到详情页面
    wx.navigateTo({
      url: '/pages/detail/detail?type=movie&id='+id,
    })
  },
  // 点击清除历史记录
  onClearEvent: function(event){
    wx.removeStorage({
      key: 'searched',
      success: function(){
        console.log('删除本地缓存成功！');
      }
    });
    this.setData({
      histories: []
    })
  }
})