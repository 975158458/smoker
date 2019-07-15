var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transition:true,
    text: null,
    pathLove:"../../assert/icon/love2.png",
    flag:true
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
    this.setData({
      text:app.globalData.question
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      transition:true
    })
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
  writeAnswerButton: function(){
    console.log("写回答")
  },
  clickPinglun: function(){
    if(this.data.flag){
      this.setData({
        pathLove: "../../assert/icon/love1.png",
        flag:false
      })
    }else{
      this.setData({
        pathLove: "../../assert/icon/love2.png",
        flag: true
      })
    }
  },
  last: function(){
    wx.navigateBack({
      delta:1
    })
  }
})