const app = getApp()

Page({
  data: {
    card: null
  },

  onLoad(options) {
    const cardId = options.cardId
    const card = app.globalData.cards.find(c => c.id === cardId)
    this.setData({ card })
    wx.setNavigationBarTitle({ title: `${card.name} Deals` })
  }
})