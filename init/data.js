const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views, easy beach access, and breathtaking sunsets every evening.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 189,
    location: "Malibu",
    country: "United States",
    category: "Beach",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers who want to be close to restaurants, galleries, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 145,
    location: "New York City",
    country: "United States",
    category: "Cities",
  },
  {
    title: "Mountain Retreat Cabin",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by towering pines and fresh air, it's the perfect place to recharge your mind and body.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 129,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the timeless charm of Tuscany in this beautifully restored villa. Explore rolling hills, world-class vineyards, and authentic Italian culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 299,
    location: "Florence",
    country: "Italy",
    category: "Cities",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this one-of-a-kind treehouse retreat. A true nature lover's paradise with a hammock deck and forest trail access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 119,
    location: "Portland",
    country: "United States",
    category: "Cabins",
  },
  {
    title: "Beachfront Paradise Condo",
    description:
      "Step out of your door and onto the sandy beach. This stylish beachfront condo offers the ultimate relaxation with ocean breezes and a private balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 249,
    location: "Cancun",
    country: "Mexico",
    category: "Beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing, kayaking, and exploring the serene lakeshore. This cozy cabin is perfect for outdoor enthusiasts seeking a true wilderness escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 139,
    location: "Lake Tahoe",
    country: "United States",
    category: "Cabins",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with breathtaking panoramic city views from this stunning penthouse. Floor-to-ceiling windows, rooftop terrace, and premium finishes throughout.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 395,
    location: "Los Angeles",
    country: "United States",
    category: "Cities",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this premium ski-in/ski-out chalet in the Swiss Alps. A ski locker, hot tub, and mountain views are all included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 375,
    location: "Verbier",
    country: "Switzerland",
    category: "Ski",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Wake up to wildlife at your doorstep and witness the legendary Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 340,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Other",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a beautifully preserved 17th-century canal house in Amsterdam's iconic Jordaan district. Authentic Dutch architecture with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 215,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Cities",
  },
  {
    title: "Private Island Bungalow",
    description:
      "Enjoy an exclusive bungalow on a private island for a truly unforgettable vacation. Crystal waters, white sand beaches, and total seclusion await you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 385,
    location: "Fiji",
    country: "Fiji",
    category: "Islands",
  },
  {
    title: "Charming Cotswolds Cottage",
    description:
      "Escape to the picturesque English countryside in this quaint thatched-roof cottage. Surrounded by meadows, stone walls, and classic English gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 159,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Cabins",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant restored brownstone in Boston's Back Bay. Walk to world-class museums, restaurants, and the iconic Freedom Trail.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 225,
    location: "Boston",
    country: "United States",
    category: "Cities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the warm sandy shores of Bali in this beautiful beachfront bungalow. Enjoy a private pool, tropical garden, and spectacular Indian Ocean sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 175,
    location: "Bali",
    country: "Indonesia",
    category: "Beach",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy jaw-dropping Rocky Mountain views from this cozy cabin in Banff National Park. Hiking, wildlife spotting, and hot springs are right outside your door.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 185,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this immaculately styled Art Deco apartment in South Beach. Minutes from the ocean and Miami's vibrant nightlife.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    },
    price: 199,
    location: "Miami",
    country: "United States",
    category: "Beach",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool and lush garden. Just steps from Phuket's world-famous beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 275,
    location: "Phuket",
    country: "Thailand",
    category: "Islands",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this magnificent castle nestled in the Scottish Highlands. Explore ancient battlements, loch-side trails, and dramatic Highland scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 350,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Other",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience Arabian luxury in this stunning desert retreat with a private pool and panoramic dune views. A world-class escape in the heart of the UAE.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 390,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Other",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this beautifully crafted log cabin surrounded by Montana's big sky country. Stargazing, fly fishing, and wildlife watching all included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 149,
    location: "Montana",
    country: "United States",
    category: "Cabins",
  },
  {
    title: "Beachfront Villa in Mykonos",
    description:
      "Enjoy crystal-clear Mediterranean waters and iconic whitewashed architecture in this stunning beachfront villa on the Greek island of Mykonos.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 315,
    location: "Mykonos",
    country: "Greece",
    category: "Islands",
  },
  {
    title: "Eco-Friendly Treehouse in Costa Rica",
    description:
      "Stay in a sustainable treehouse nestled in the lush Costa Rican rainforest. Wake up to howler monkeys, toucans, and the sounds of nature all around you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 109,
    location: "Manuel Antonio",
    country: "Costa Rica",
    category: "Cabins",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of the American South in this beautifully restored antebellum cottage. Cobblestone streets, horse-drawn carriages, and fine dining await.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 175,
    location: "Charleston",
    country: "United States",
    category: "Cities",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore one of the world's most exciting cities from this sleek and centrally located Tokyo apartment. Perfectly positioned for temples, ramen, and neon-lit nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 195,
    location: "Tokyo",
    country: "Japan",
    category: "Cities",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days paddleboarding, swimming, and relaxing on the private dock of this idyllic lakefront cabin in the White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 155,
    location: "New Hampshire",
    country: "United States",
    category: "Cabins",
  },
  {
    title: "Overwater Villa in the Maldives",
    description:
      "Indulge in ultimate luxury in this overwater villa perched above a turquoise lagoon in the Maldives. Direct ocean access, glass floor panels, and endless horizon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 399,
    location: "North Malé Atoll",
    country: "Maldives",
    category: "Islands",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the world-famous Aspen slopes in style with this luxurious ski chalet. A stone fireplace, ski-in access, and après-ski hot tub make this the perfect winter escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 369,
    location: "Aspen",
    country: "United States",
    category: "Ski",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to this hidden gem on the Pacific coast of Costa Rica. Surf world-class waves, spot sea turtles nesting, and fall asleep to the sound of the ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 219,
    location: "Nosara",
    country: "Costa Rica",
    category: "Beach",
  },
  {
    title: "Vineyard Cottage in Napa Valley",
    description:
      "Wake up surrounded by rolling vineyards in this romantic Napa Valley cottage. World-class wine tasting, farm-to-table dining, and stunning valley views included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 259,
    location: "Napa Valley",
    country: "United States",
    category: "Other",
  },
];

module.exports = { data: sampleListings };
