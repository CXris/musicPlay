// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // songList: [{
    //     songName: "Maria",
    //     singer: "Hwa Sa",
    //     imgURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595395029287&di=519e7a01caa9730af31724d9e3865f1f&imgtype=0&src=http%3A%2F%2Fp2.itc.cn%2Fq_70%2Fimages03%2F20200615%2F2240051ddc6b48d3992e3fd5f31e4a08.jpeg",
    //     songURL: "https://od.lk/s/MjNfMTY3ODM4NDJf/Maria.mp3"
    //   },
    //   {
    //     songName: "FLOWER SHOWER",
    //     singer: "김현아",
    //     imgURL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595395146311&di=3f401c1edf8fde0759f53828dc8285b8&imgtype=0&src=http%3A%2F%2Fimge.kugou.com%2Fstdmusic%2F20191105%2F20191105143611587128.jpg",
    //     songURL: "https://od.lk/s/MjNfMTY3ODQxMDRf/FLOWER%20SHOWER.mp3"
    //   },
    //   {
    //     songName: "Fiesta",
    //     singer: "IZONE",
    //     imgURL: "https://imgsa.baidu.com/forum/w%3D580/sign=c41c02b704d162d985ee621421dfa950/d3b089529822720ecae7ae8975cb0a46f21fab64.jpg",
    //     songURL: "http://ei.sycdn.kuwo.cn/217de7c7134069db38576fdf49b80927/5f1a4048/resource/n2/76/63/1356834191.mp3"
    //   },
    //   {
    //     songName: "eight (feat. SUGA)",
    //     singer: "IU",
    //     imgURL: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698444238,3589110906&fm=11&gp=0.jpg",
    //     songURL: "https://od.lk/d/MjNfMTY3ODQxMTRf/eight.mp3"
    //   }
    // ],
  },

  toPlay(e) {
    // console.log(e)
    var index = e.currentTarget.dataset.index
    var songObj = this.data.songList[index]
    console.log(this.data.songList[index])
    wx.navigateTo({
      url: '/pages/music/music?value=' + encodeURIComponent(JSON.stringify(songObj)),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fastmock.site/mock/d125b7e33e8824d9791be085757e2b1c/api/api/songList',
      method : "POST",
      success: (res) => {
        console.log(res)
        this.setData({
          songList: res.data.data.songList
        })
      }
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