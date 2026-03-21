App({
  globalData: {
    cards: [
      {
        id: 'ku-eat',
        name: 'KU Eat Central',
        memberLevel: 'Student Member',
        points: 420,
        nextTierPoints: 500,
        tierName: 'Silver',
        color: '#7B2D8B',
        accentColor: '#c084fc',
        logo: '🍽️',
        cardType: 'loyalty',
        barcode: '4111 1234 5678 9010',
        deals: [
          {
            id: 'ku1',
            title: 'Meal Deal — £4.50',
            description: 'Main, snack and drink every weekday. Flash your card at the till.',
            tag: 'Daily',
            tagColor: '#c084fc',
            expiry: 'Ongoing'
          },
          {
            id: 'ku2',
            title: '10th Coffee Free',
            description: 'Stamp your card 9 times and your 10th hot drink is on us.',
            tag: 'Stamp Card',
            tagColor: '#f59e0b',
            expiry: 'Ongoing'
          },
          {
            id: 'ku3',
            title: 'Thursday Student Night — 20% Off',
            description: 'Show your KU student ID every Thursday for 20% off your total bill.',
            tag: 'Weekly',
            tagColor: '#10b981',
            expiry: 'Every Thursday'
          }
        ]
      },
      {
        id: 'nino',
        name: 'Nino Cafe',
        memberLevel: 'Regular',
        points: 210,
        nextTierPoints: 300,
        tierName: 'Gold',
        color: '#92400e',
        accentColor: '#fbbf24',
        logo: '☕',
        cardType: 'loyalty',
        barcode: '4111 9876 5432 1010',
        deals: [
          {
            id: 'nino1',
            title: 'Buy 5 Coffees, Get 1 Free',
            description: 'Every 5th coffee at Nino is completely free. Best coffee in Kingston.',
            tag: 'Loyalty',
            tagColor: '#fbbf24',
            expiry: 'Ongoing'
          },
          {
            id: 'nino2',
            title: 'Weekend Pastry + Coffee — £5',
            description: 'Any pastry and a flat white for £5 on Saturdays and Sundays.',
            tag: 'Weekend',
            tagColor: '#f87171',
            expiry: 'Weekends'
          },
          {
            id: 'nino3',
            title: 'Student 15% Off',
            description: 'Show your KU student card for 15% off everything at Nino Cafe.',
            tag: 'Student',
            tagColor: '#60a5fa',
            expiry: 'Ongoing'
          }
        ]
      },
      {
        id: 'cappadocia',
        name: 'Cappadocia',
        memberLevel: 'Rewards Member',
        points: 780,
        nextTierPoints: 1000,
        tierName: 'Platinum',
        color: '#7f1d1d',
        accentColor: '#f87171',
        logo: '🥙',
        cardType: 'loyalty',
        barcode: '4111 4567 8901 2340',
        deals: [
          {
            id: 'cap1',
            title: 'Student Set Menu — £12.95',
            description: 'Starter, main and soft drink. Available Mon–Fri for KU students.',
            tag: 'Student',
            tagColor: '#60a5fa',
            expiry: 'Mon–Fri'
          },
          {
            id: 'cap2',
            title: 'Group Booking — 10% Off',
            description: 'Book for 4 or more and get 10% off the total bill automatically.',
            tag: 'Groups',
            tagColor: '#f87171',
            expiry: 'Ongoing'
          },
          {
            id: 'cap3',
            title: 'Birthday Meal Free',
            description: 'Register your birthday and get a free main course on your special day.',
            tag: 'Birthday',
            tagColor: '#c084fc',
            expiry: 'Annual'
          }
        ]
      },
      {
        id: 'luffa-crypto',
        name: 'Luffa Wallet',
        memberLevel: 'Web3 Member',
        points: 0,
        nextTierPoints: 1,
        tierName: '',
        color: '#052e16',
        accentColor: '#00e5a0',
        logo: '⬡',
        cardType: 'crypto',
        barcode: '0x3f4A...c92B',
        ethBalance: '0.842',
        usdValue: '£2,104.30',
        deals: [
          {
            id: 'luffa1',
            title: 'Earn EDS on Every Purchase',
            description: 'Pay with your Luffa Wallet at partner merchants and earn EDS tokens automatically.',
            tag: 'Web3',
            tagColor: '#00e5a0',
            expiry: 'Always On'
          },
          {
            id: 'luffa2',
            title: 'Gas-Free Transactions This Week',
            description: 'Luffa covers your network fees on all transactions under £50 this week.',
            tag: 'Limited',
            tagColor: '#f59e0b',
            expiry: 'Ends Sunday'
          },
          {
            id: 'luffa3',
            title: 'Refer a Friend — 50 EDS',
            description: 'Invite a friend to Luffa and both of you receive 50 EDS tokens instantly.',
            tag: 'Referral',
            tagColor: '#60a5fa',
            expiry: 'Ongoing'
          }
        ]
      }
    ]
  },

  onLaunch() {
    const launched = wx.getStorageSync('hasLaunched')
    if (!launched) {
      wx.setStorageSync('hasLaunched', true)
      // flag for onboarding — read in home.js
      wx.setStorageSync('showOnboarding', true)
    }
  }
})