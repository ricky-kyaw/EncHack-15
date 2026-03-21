const app = getApp()

Page({
  data: {
    savedDealsList: []
  },

  onShow() {
    const savedDeals = wx.getStorageSync('savedDeals') || {}
    const allDeals = []

    app.globalData.cards.forEach(card => {
      card.deals.forEach(deal => {
        if (savedDeals[deal.id]) {
          allDeals.push({
            ...deal,
            cardName: card.name,
            cardAccent: card.accentColor,
            cardLogo: card.logo
          })
        }
      })
    })

    this.setData({ savedDealsList: allDeals })
  },

  onUnsave(e) {
    const dealId = e.currentTarget.dataset.dealid
    const saved = wx.getStorageSync('savedDeals') || {}
    delete saved[dealId]
    wx.setStorageSync('savedDeals', saved)
    this.onShow()
    wx.showToast({ title: 'Removed', icon: 'none', duration: 1000 })
  }
})