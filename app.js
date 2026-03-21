App({
  globalData: {
    cards: [
      {
        id: 'nike',
        name: 'Nike',
        memberLevel: 'Gold Member',
        points: 1240,
        color: '#111111',
        accentColor: '#f5c518',
        logo: '👟',
        deals: [
          {
            id: 'd1',
            title: 'Black Friday — 50% Off',
            description: 'Sitewide discount on all footwear and apparel.',
            tag: 'Limited Time',
            tagColor: '#e63946',
            expiry: 'Ends 30 Nov'
          },
          {
            id: 'd2',
            title: 'Student Discount — 10% Off',
            description: 'Verified students get 10% off every order.',
            tag: 'Student',
            tagColor: '#457b9d',
            expiry: 'Ongoing'
          },
          {
            id: 'd3',
            title: 'NikePlus Double Points Weekend',
            description: 'Earn 2x points on all purchases this weekend.',
            tag: 'Points',
            tagColor: '#2a9d8f',
            expiry: 'This Weekend'
          }
        ]
      },
      {
        id: 'tesco',
        name: 'Tesco Clubcard',
        memberLevel: 'Clubcard Member',
        points: 340,
        color: '#00539f',
        accentColor: '#ee1c25',
        logo: '🛒',
        deals: [
          {
            id: 'd4',
            title: 'Clubcard Prices — Up to 40% Off',
            description: 'Exclusive prices on 1000s of products in store and online.',
            tag: 'In Store',
            tagColor: '#ee1c25',
            expiry: 'Weekly'
          },
          {
            id: 'd5',
            title: 'Triple Points — Fresh Produce',
            description: 'Earn 3x Clubcard points on all fresh fruit and veg.',
            tag: 'Points Boost',
            tagColor: '#2a9d8f',
            expiry: 'Ends Sunday'
          },
          {
            id: 'd6',
            title: 'Fuel Saver — 5p Per Litre Off',
            description: 'Spend £50 in store and save 5p per litre at Tesco petrol stations.',
            tag: 'Fuel',
            tagColor: '#457b9d',
            expiry: 'This Month'
          }
        ]
      },
      {
        id: 'zara',
        name: 'Zara',
        memberLevel: 'Zara Member',
        points: 890,
        color: '#1a1a1a',
        accentColor: '#c9a84c',
        logo: '👗',
        deals: [
          {
            id: 'd7',
            title: 'End of Season Sale — Up to 50%',
            description: 'Final reductions on selected lines across all categories.',
            tag: 'Sale',
            tagColor: '#e63946',
            expiry: 'While Stocks Last'
          },
          {
            id: 'd8',
            title: 'Free Next-Day Delivery',
            description: 'Members get free next-day delivery on all orders over £30.',
            tag: 'Delivery',
            tagColor: '#457b9d',
            expiry: 'Ongoing'
          },
          {
            id: 'd9',
            title: 'Early Access — New Collection',
            description: 'Members shop the new Spring collection 24 hours before everyone else.',
            tag: 'Early Access',
            tagColor: '#c9a84c',
            expiry: 'Starts Friday'
          }
        ]
      }
    ]
  }
})