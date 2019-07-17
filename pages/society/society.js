// pages/society/socity.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:null,
    transition:true,
    card:null,
    idx:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      transition:true
    });
    var obj1 = {
      extra: "请问各位是如何成功戒烟的，可以分享一下吗？",
      thumb:"../../assert/icon/girl1.png"
    };
    var obj2 = {
      extra:"各位兄弟可以分享一下失败的原因吗？",
      thumb:"../../assert/icon/girl2.png"
    };
    var obj3 = {
      extra:"你是从什么时候开始决定要戒烟的？",
      thumb:"../../assert/icon/girl3.png"
    };
    var arry = [obj1, obj2, obj3];
    this.setData({ card: arry });
    console.log(this.data.idx);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      transition:false
    })
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

  },

  onSerch: function(e){
    console.log(e)
  },
  onclick1: function(event){
    console.log("点问题")
    app.globalData.question = "请问各位是如何成功戒烟的，可以分享一下吗？"
    // const query = wx.createSelectorQuery();
    console.log(event)
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  onclick2: function () {
    app.globalData.question = "各位兄弟可以分享一下失败的原因吗？" ;
    console.log(app.globalData.question)
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  onclick3: function () {
    app.globalData.question = "你是从什么时候开始决定要戒烟的？"
    wx.navigateTo({
      url: '../answer/answer'
    })
  }
})