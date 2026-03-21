const app = getApp()

Page({
  data: {
    cardName: '',
    cardType: 'loyalty'
  },

  onNameInput(e) {
    this.setData({ cardName: e.detail.value })
  },

  onSelectType(e) {
    this.setData({ cardType: e.currentTarget.dataset.type })
  },

  onSubmit() {
    const { cardName, cardType } = this.data
    if (!cardName.trim()) {
      wx.showToast({ title: 'Enter a card name', icon: 'none' })
      return
    }

    const newCard = {
      id: 'custom-' + Date.now(),
      name: cardName,
      memberLevel: 'Member',
      points: 0,
      nextTierPoints: 100,
      tierName: 'Silver',
      color: '#1a1a2e',
      accentColor: '#818cf8',
      logo: cardType === 'crypto' ? '⬡' : '🃏',
      cardType: cardType,
      barcode: 'CUSTOM-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      ethBalance: cardType === 'crypto' ? '0.000' : null,
      usdValue: cardType === 'crypto' ? '£0.00' : null,
      deals: [
        {
          id: 'custom-deal-' + Date.now(),
          title: 'Welcome Offer',
          description: 'Thanks for adding ' + cardName + ' to your Deal Passport.',
          tag: 'New',
          tagColor: '#818cf8',
          expiry: 'Limited'
        }
      ]
    }

    // Push to globalData so home page sees it immediately
    app.globalData.cards.push(newCard)

    // Persist to storage so it survives app restarts
    const customCards = wx.getStorageSync('customCards') || []
    customCards.push(newCard)
    wx.setStorageSync('customCards', customCards)

    wx.showToast({ title: 'Card added!', icon: 'success' })
    setTimeout(() => wx.navigateBack(), 1500)
  }
})