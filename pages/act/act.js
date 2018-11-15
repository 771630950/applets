//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'say hello'
  },
  onLoad: function () {
   
  },
  sayHello:function(){
      wx.showToast({title:"跟我走吧"});
  }
})
