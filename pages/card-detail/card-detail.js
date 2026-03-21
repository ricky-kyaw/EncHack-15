const app = getApp()

Page({
  data: {
    card: null,
    savedDeals: {},
    showBarcode: false
  },

  onLoad(options) {
    const card = app.globalData.cards.find(c => c.id === options.cardId)
    const savedDeals = wx.getStorageSync('savedDeals') || {}
    this.setData({ card, savedDeals })
    wx.setNavigationBarTitle({ title: card.name })
  },

  onToggleSave(e) {
    const dealId = e.currentTarget.dataset.dealid
    const saved = Object.assign({}, this.data.savedDeals)
    if (saved[dealId]) {
      delete saved[dealId]
    } else {
      saved[dealId] = true
    }
    this.setData({ savedDeals: saved })
    wx.setStorageSync('savedDeals', saved)
  },

  onToggleBarcode() {
    this.setData({ showBarcode: !this.data.showBarcode })
  },

  onClaim(e) {
    const title = e.currentTarget.dataset.title
    wx.showToast({
      title: 'Deal saved!',
      icon: 'success',
      duration: 1500
    })
  }
})