export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
};

export const products: Product[] = [
  // 📱 Mobiles
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    description: "Apple iPhone 15 Pro with A17 Bionic chip, 128GB storage.",
    price: 999.00,
    imageUrl: "https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280",
    images: [
      "https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280",
      "https://via.placeholder.com/800x600?text=iPhone+15+Pro+Max+2",
      "https://via.placeholder.com/800x600?text=iPhone+15+Pro+Max+3"
    ],
    rating: 4.8,
    reviewCount: 5400,
    inStock: true,
    category: "mobiles"
  },
  {
    id: "2",
    name: "iPhone 14 ",
    description: "Apple iPhone 14 with 6.1-inch display and 128GB storage.",
    price: 799.00,
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24931302/236791_Apple_iPhone_15_and_15_Plus_review_DSeifert_0005.jpg?quality=90&strip=all&crop=0,0,100,100",
    images: [
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24931302/236791_Apple_iPhone_15_and_15_Plus_review_DSeifert_0005.jpg?quality=90&strip=all&crop=0,0,100,100",
      "https://via.placeholder.com/800x600?text=iPhone+14+2",
      "https://via.placeholder.com/800x600?text=iPhone+14+3"
    ],
    rating: 4.6,
    reviewCount: 4300,
    inStock: true,
    category: "mobiles"
  },
  {
    id: "3",
    name: "Samsung Galaxy S24 Ultra",
    description: "Samsung flagship with Snapdragon 8 Gen 3, 256GB storage.",
    price: 1199.00,
    imageUrl: "https://stg-images.samsung.com/is/image/samsung/assets/africa_en/smartphones/galaxy-s24-ultra/images/hotfix4/galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg?imbypass=true",
    images: [
      "https://stg-images.samsung.com/is/image/samsung/assets/africa_en/smartphones/galaxy-s24-ultra/images/hotfix4/galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg?imbypass=true",
      "https://via.placeholder.com/800x600?text=Galaxy+S24+Ultra+2",
      "https://via.placeholder.com/800x600?text=Galaxy+S24+Ultra+3"
    ],
    rating: 4.7,
    reviewCount: 3800,
    inStock: true,
    category: "mobiles"
  },
  {
    id: "4",
    name: "Samsung Galaxy S23",
    description: "Samsung Galaxy S23 with 6.1-inch AMOLED display, 128GB storage.",
    price: 699.00,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5f04f767ded4a14e876e6190/21febb15-62f9-4e60-8989-5faaa21aa449/Untitled.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/5f04f767ded4a14e876e6190/21febb15-62f9-4e60-8989-5faaa21aa449/Untitled.jpg",
      "https://via.placeholder.com/800x600?text=Galaxy+S23+2",
      "https://via.placeholder.com/800x600?text=Galaxy+S23+3"
    ],
    rating: 4.5,
    reviewCount: 2900,
    inStock: false,
    category: "mobiles"
  },

  // 🏠 Home Appliances
  {
    id: "5",
    name: "LG Smart Refrigerator",
    description: "Double-door refrigerator with smart cooling and Wi-Fi control.",
    price: 1499.00,
    imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/270498_0_qawhxw.png",
    images: [
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/270498_0_qawhxw.png",
      "https://via.placeholder.com/800x600?text=LG+Fridge+2",
      "https://via.placeholder.com/800x600?text=LG+Fridge+3"
    ],
    rating: 4.4,
    reviewCount: 1200,
    inStock: true,
    category: "homeappliances"
  },
  {
    id: "6",
    name: "Samsung 65-inch QLED TV",
    description: "Ultra HD Smart TV with HDR10+ and Dolby Atmos.",
    price: 1299.00,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/HctCzEqcNbts3apCaMacqa.jpg",
    images: [
      "https://cdn.mos.cms.futurecdn.net/HctCzEqcNbts3apCaMacqa.jpg",
      "https://via.placeholder.com/800x600?text=QLED+TV+2",
      "https://via.placeholder.com/800x600?text=QLED+TV+3"
    ],
    rating: 4.7,
    reviewCount: 2500,
    inStock: true,
    category: "homeappliances"
  },
  {
    id: "7",
    name: "Leather Sofa Set",
    description: "3-seater premium leather sofa with ergonomic design.",
    price: 899.00,
    imageUrl: "https://cdn11.bigcommerce.com/s-1u1m3wn/images/stencil/1280x1280/products/4299/20372/Kosta-tan-leather-3-seat-sofa-with-black-metal-legs-lifestyle-front-on__79703.1695365401.jpg?c=2",
    images: [
      "https://cdn11.bigcommerce.com/s-1u1m3wn/images/stencil/1280x1280/products/4299/20372/Kosta-tan-leather-3-seat-sofa-with-black-metal-legs-lifestyle-front-on__79703.1695365401.jpg?c=2",
      "https://via.placeholder.com/800x600?text=Leather+Sofa+2",
      "https://via.placeholder.com/800x600?text=Leather+Sofa+3"
    ],
    rating: 4.3,
    reviewCount: 800,
    inStock: true,
    category: "homeappliances"
  },

  // 💻 Computers
  {
    id: "8",
    name: "MacBook Pro 16-inch",
    description: "Apple MacBook Pro with M3 Pro chip, 16GB RAM, 512GB SSD.",
    price: 2499.00,
    imageUrl: "https://techcrunch.com/wp-content/uploads/2024/11/CMC_8144.jpg?resize=1200,800",
    images: [
      "https://techcrunch.com/wp-content/uploads/2024/11/CMC_8144.jpg?resize=1200,800",
      "https://via.placeholder.com/800x600?text=MacBook+Pro+2",
      "https://via.placeholder.com/800x600?text=MacBook+Pro+3"
    ],
    rating: 4.9,
    reviewCount: 3100,
    inStock: true,
    category: "computers"
  },
  {
    id: "9",
    name: "MacBook Air 13-inch",
    description: "Apple MacBook Air with M2 chip, 8GB RAM, 256GB SSD.",
    price: 1099.00,
    imageUrl: "https://helios-i.mashable.com/imagery/reviews/02EY5PwTNUBtCyTgSveU1d3/images-8.fill.size_2000x1333.v1611701810.jpg",
    images: [
      "https://helios-i.mashable.com/imagery/reviews/02EY5PwTNUBtCyTgSveU1d3/images-8.fill.size_2000x1333.v1611701810.jpg",
      "https://via.placeholder.com/800x600?text=MacBook+Air+2",
      "https://via.placeholder.com/800x600?text=MacBook+Air+3"
    ],
    rating: 4.6,
    reviewCount: 2700,
    inStock: true,
    category: "computers"
  },

  // 🏋️ Fitness Equipment
  {
    id: "10",
    name: "Treadmill Pro 3000",
    description: "Smart treadmill with incline control and Bluetooth speakers.",
    price: 799.00,
    imageUrl: "https://media.istockphoto.com/id/1182776058/photo/woman-running-exercise-on-track-treadmill.jpg?s=612x612&w=0&k=20&c=fKelew6TAfGQ_Pn_nkgR6p_Dx-fDQl6HPWUA3oyqhs0=",
    images: [
      "https://media.istockphoto.com/id/1182776058/photo/woman-running-exercise-on-track-treadmill.jpg?s=612x612&w=0&k=20&c=fKelew6TAfGQ_Pn_nkgR6p_Dx-fDQl6HPWUA3oyqhs0=",
      "https://via.placeholder.com/800x600?text=Treadmill+2",
      "https://via.placeholder.com/800x600?text=Treadmill+3"
    ],
    rating: 4.5,
    reviewCount: 1500,
    inStock: true,
    category: "fitness"
  },
  {
    id: "11",
    name: "Adjustable Dumbbell Set",
    description: "Pair of adjustable dumbbells ranging from 5 to 50 lbs.",
    price: 249.00,
    imageUrl: "https://rukminim2.flixcart.com/image/480/640/xif0q/dumbbell/r/c/n/llad02-adjustable-dumbbells-home-gym-equipment-for-fitness-gym-original-imah4h44n4pn93jx.jpeg?q=90",
    images: [
      "https://rukminim2.flixcart.com/image/480/640/xif0q/dumbbell/r/c/n/llad02-adjustable-dumbbells-home-gym-equipment-for-fitness-gym-original-imah4h44n4pn93jx.jpeg?q=90",
      "https://via.placeholder.com/800x600?text=Dumbbells+2",
      "https://via.placeholder.com/800x600?text=Dumbbells+3"
    ],
    rating: 4.8,
    reviewCount: 2200,
    inStock: true,
    category: "fitness"
  },
  {
    id: "12",
    name: "Exercise Bike X100",
    description: "Indoor cycling bike with LCD monitor and resistance control.",
    price: 499.00,
    imageUrl: "https://m.media-amazon.com/images/I/61jzkiKXSkL._AC_UF894,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61jzkiKXSkL._AC_UF894,1000_QL80_.jpg",
      "https://via.placeholder.com/800x600?text=Exercise+Bike+2",
      "https://via.placeholder.com/800x600?text=Exercise+Bike+3"
    ],
    rating: 4.4,
    reviewCount: 900,
    inStock: false,
    category: "fitness"
  }
];

