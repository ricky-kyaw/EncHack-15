const app = getApp()

Page({
  data: {
    cards: [],
    activeCardIndex: 0,
    savedDeals: {},
    showOnboarding: false,
    onboardingStep: 0
  },

  onLoad() {
    const showOnboarding = wx.getStorageSync('showOnboarding') || false
    this.setData({ showOnboarding })
    if (showOnboarding) this.runOnboarding()
    this.refreshCards()
  },

  onShow() {
    // Called every time page comes back into view (e.g. after adding a card)
    this.refreshCards()
  },

  refreshCards() {
    // Merge base cards with any user-added custom cards
    const customCards = wx.getStorageSync('customCards') || []
    const baseIds = app.globalData.cards.map(c => c.id)
    const newCustom = customCards.filter(c => !baseIds.includes(c.id))
    const allCards = [...app.globalData.cards, ...newCustom]

    // Sync globalData
    app.globalData.cards = allCards

    const savedDeals = wx.getStorageSync('savedDeals') || {}
    this.setData({ cards: allCards, savedDeals })
  },

  runOnboarding() {
    let step = 0
    const total = app.globalData.cards.length
    const interval = setInterval(() => {
      step++
      this.setData({ onboardingStep: step })
      if (step >= total) {
        clearInterval(interval)
        setTimeout(() => {
          wx.setStorageSync('showOnboarding', false)
          this.setData({ showOnboarding: false })
        }, 800)
      }
    }, 600)
  },

  onSelectCard(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.setData({ activeCardIndex: index })
  },

  onViewDeals(e) {
    const cardId = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/card-detail/card-detail?cardId=${cardId}` })
  },

  onToggleSave(e) {
    const dealId = e.currentTarget.dataset.dealid
    const saved = Object.assign({}, this.data.savedDeals)
    if (saved[dealId]) { delete saved[dealId] } else { saved[dealId] = true }
    this.setData({ savedDeals: saved })
    wx.setStorageSync('savedDeals', saved)
  },

  onAddCard() {
    wx.navigateTo({ url: '/pages/browse-cards/browse-cards' })
  },

  onViewAnalytics() {
    wx.navigateTo({ url: '/pages/analytics/analytics' })
  },

  onViewSaved() {
    wx.navigateTo({ url: '/pages/saved-deals/saved-deals' })
  }
})