// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playerURL: "https://s3.music.126.net/mobile-new/img/disc-ip6.png?",
    playStatus: false,
    audioContext: null
  },

  play() {
    this.setData({
      playStatus: !this.data.playStatus
    }, () => {
      if (!this.data.playStatus) {
        this.data.audioContext.pause()
      } else {
        this.data.audioContext.play()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(decodeURIComponent(options.value))
    var songObj = JSON.parse(decodeURIComponent(options.value))
    var audioContext = wx.createInnerAudioContext()
    // audioContext.src = "https://www.daihuo.cn/song/LoveIsGone.mp3"
    audioContext.src = songObj.songURL
    audioContext.autoplay = false
    audioContext.loop = true
    this.setData({
      audioContext: audioContext,
      imgURL: songObj.imgURL,
      songName: songObj.songName,
      singer: songObj.singer
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
    this.data.audioContext.destroy()
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