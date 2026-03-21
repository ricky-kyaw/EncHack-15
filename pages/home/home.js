const app = getApp()

Page({
  data: {
    cards: [],
    activeCardIndex: 0
  },

  onLoad() {
    this.setData({
      cards: app.globalData.cards
    })
  },

  onSelectCard(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeCardIndex: index })
  },

  onViewDeals(e) {
    const cardId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/card-detail/card-detail?cardId=${cardId}`
    })
  }
})