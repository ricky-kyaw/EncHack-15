Page({
  data: {
    merchant: null,
    stats: {},
    topDeals: [],
    weeklyData: [],
    crossInsight: {}
  },

  onLoad(options) {
    const cardId = options.cardId
    const data = this.getMerchantData(cardId)
    this.setData({ ...data })
    wx.setNavigationBarTitle({ title: data.merchant.name + ' Analytics' })
  },

  getMerchantData(cardId) {
    const allData = {
      'ku-eat': {
        merchant: {
          name: 'KU Eat Central',
          logo: '🍽️',
          accentColor: '#c084fc',
          category: 'Campus · Food'
        },
        stats: {
          totalMembers: 1240,
          totalClaims: 412,
          savedDeals: 318,
          weeklyVisits: 3.2
        },
        topDeals: [
          { title: 'Meal Deal — £4.50', claims: 412, bar: 100, tag: 'Daily' },
          { title: '10th Coffee Free', claims: 289, bar: 70, tag: 'Stamp Card' },
          { title: 'Thursday 20% Off', claims: 142, bar: 34, tag: 'Weekly' }
        ],
        weeklyData: [
          { day: 'Mon', height: 55 },
          { day: 'Tue', height: 60 },
          { day: 'Wed', height: 70 },
          { day: 'Thu', height: 100 },
          { day: 'Fri', height: 85 },
          { day: 'Sat', height: 30 },
          { day: 'Sun', height: 20 }
        ],
        crossInsight: {
          stat: '68%',
          text: 'of your members also have a Nino Cafe card — consider a joint promotion.',
          color: '#fbbf24'
        }
      },

      'nino': {
        merchant: {
          name: 'Nino Cafe',
          logo: '☕',
          accentColor: '#fbbf24',
          category: 'Local · Coffee'
        },
        stats: {
          totalMembers: 890,
          totalClaims: 289,
          savedDeals: 201,
          weeklyVisits: 2.8
        },
        topDeals: [
          { title: 'Buy 5 Coffees Get 1 Free', claims: 289, bar: 100, tag: 'Loyalty' },
          { title: 'Weekend Pastry + Coffee', claims: 198, bar: 68, tag: 'Weekend' },
          { title: 'Student 15% Off', claims: 143, bar: 49, tag: 'Student' }
        ],
        weeklyData: [
          { day: 'Mon', height: 40 },
          { day: 'Tue', height: 45 },
          { day: 'Wed', height: 50 },
          { day: 'Thu', height: 65 },
          { day: 'Fri', height: 80 },
          { day: 'Sat', height: 100 },
          { day: 'Sun', height: 90 }
        ],
        crossInsight: {
          stat: '54%',
          text: 'of your members also visit Cappadocia — weekend diners who also brunch.',
          color: '#f87171'
        }
      },

      'cappadocia': {
        merchant: {
          name: 'Cappadocia',
          logo: '🥙',
          accentColor: '#f87171',
          category: 'Local · Restaurant'
        },
        stats: {
          totalMembers: 780,
          totalClaims: 201,
          savedDeals: 167,
          weeklyVisits: 1.4
        },
        topDeals: [
          { title: 'Student Set Menu — £12.95', claims: 201, bar: 100, tag: 'Student' },
          { title: 'Group Booking 10% Off', claims: 134, bar: 67, tag: 'Groups' },
          { title: 'Birthday Meal Free', claims: 44, bar: 22, tag: 'Birthday' }
        ],
        weeklyData: [
          { day: 'Mon', height: 30 },
          { day: 'Tue', height: 35 },
          { day: 'Wed', height: 45 },
          { day: 'Thu', height: 100 },
          { day: 'Fri', height: 95 },
          { day: 'Sat', height: 80 },
          { day: 'Sun', height: 60 }
        ],
        crossInsight: {
          stat: '71%',
          text: 'of your members also use KU Eat Central — campus students dining out.',
          color: '#c084fc'
        }
      }
    }

    return allData[cardId] || allData['ku-eat']
  }
})