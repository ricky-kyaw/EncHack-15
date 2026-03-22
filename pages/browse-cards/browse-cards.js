const app = getApp()

Page({
  data: {
    searchQuery: '',
    addedCardIds: [],
    filteredMerchants: [],
    allMerchants: [
      {
        id: 'ku-eat',
        name: 'KU Eat Central',
        category: 'Campus · Food',
        logo: '🍽️',
        accentColor: '#c084fc',
        color: '#7B2D8B',
        dealCount: 3,
        description: 'Campus canteen on Penrhyn Road. Student meal deals and stamp cards.'
      },
      {
        id: 'nino',
        name: 'Nino Cafe',
        category: 'Local · Coffee',
        logo: '☕',
        accentColor: '#fbbf24',
        color: '#92400e',
        dealCount: 3,
        description: 'Family-run cafe in Fairfield Park. Rated 5★ by Kingston locals.'
      },
      {
        id: 'cappadocia',
        name: 'Cappadocia',
        category: 'Local · Restaurant',
        logo: '🥙',
        accentColor: '#f87171',
        color: '#7f1d1d',
        dealCount: 3,
        description: 'Turkish restaurant near Kingston station. Student set menus available.'
      },
      {
        id: 'luffa-crypto',
        name: 'Luffa Wallet',
        category: 'Web3 · Crypto',
        logo: '⬡',
        accentColor: '#00e5a0',
        color: '#052e16',
        dealCount: 3,
        description: 'Your Luffa Web3 wallet. Earn EDS tokens on every purchase.'
      },
      {
        id: 'beans-coffee',
        name: 'Beans & Co',
        category: 'Local · Coffee',
        logo: '🫘',
        accentColor: '#a78bfa',
        color: '#2e1065',
        dealCount: 2,
        description: 'Independent coffee shop near Kingston town centre. Student discount always on.'
      },
      {
        id: 'campus-print',
        name: 'KU Print Shop',
        category: 'Campus · Services',
        logo: '🖨️',
        accentColor: '#38bdf8',
        color: '#0c4a6e',
        dealCount: 2,
        description: 'On-campus printing. Earn credits on every print job.'
      },
      {
        id: 'kingston-gym',
        name: 'KU Active',
        category: 'Campus · Fitness',
        logo: '🏋️',
        accentColor: '#fb923c',
        color: '#431407',
        dealCount: 2,
        description: 'Kingston University gym. Student membership perks and class discounts.'
      }
    ]
  },

  onLoad() {
    const addedIds = app.globalData.cards.map(c => c.id)
    this.setData({
      addedCardIds: addedIds,
      filteredMerchants: this.data.allMerchants
    })
  },

  onSearch(e) {
    const query = e.detail.value.toLowerCase()
    const filtered = this.data.allMerchants.filter(m =>
      m.name.toLowerCase().includes(query) ||
      m.category.toLowerCase().includes(query)
    )
    this.setData({ searchQuery: query, filteredMerchants: filtered })
  },

  onAddCard(e) {
    const merchantId = e.currentTarget.dataset.id
    if (this.data.addedCardIds.includes(merchantId)) return

    const merchant = this.data.allMerchants.find(m => m.id === merchantId)

    // Build a full card object from the merchant template
    const newCard = {
      id: merchant.id,
      name: merchant.name,
      memberLevel: 'New Member',
      points: 0,
      nextTierPoints: 100,
      tierName: 'Silver',
      color: merchant.color,
      accentColor: merchant.accentColor,
      logo: merchant.logo,
      cardType: merchant.id === 'luffa-crypto' ? 'crypto' : 'loyalty',
      barcode: 'PASS-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      ethBalance: merchant.id === 'luffa-crypto' ? '0.000' : null,
      usdValue: merchant.id === 'luffa-crypto' ? '£0.00' : null,
      deals: [
        {
          id: merchant.id + '-welcome',
          title: 'Welcome to ' + merchant.name,
          description: 'Your card is active. Start earning rewards on your next visit.',
          tag: 'New',
          tagColor: merchant.accentColor,
          expiry: 'Ongoing'
        }
      ]
    }

    app.globalData.cards.push(newCard)
    const customCards = wx.getStorageSync('customCards') || []
    customCards.push(newCard)
    wx.setStorageSync('customCards', customCards)

    const newAdded = [...this.data.addedCardIds, merchantId]
    this.setData({ addedCardIds: newAdded })

    wx.showToast({ title: 'Card added!', icon: 'success', duration: 1200 })
  },

  onCustomCard() {
    wx.navigateTo({ url: '/pages/add-card/add-card' })
  }
})