import type { TopProduct } from 'src/models/top_products';

class TopProductsApi {
  getTopProducts(): Promise<TopProduct[]> {
    const products: TopProduct[] = [
      {
        id: '1',
        image: '/placeholders/products/1.png',
        name: 'Apple Macbook PRO 16',
        orders: 321,
        inventory: 99,
        currency: '$',
        revenue: 6748,
        revenuePercent: 59,
      },
      {
        id: '2',
        image: '/placeholders/products/2.png',
        name: 'Apple TV Gen. 5 2021 ',
        orders: 756,
        inventory: 76,
        currency: '$',
        revenue: 3956,
        revenuePercent: 34,
      },
      {
        id: '3',
        image: '/placeholders/products/3.png',
        name: 'iPhone 12 PRO Max 512MB',
        orders: 34,
        inventory: 5,
        currency: '$',
        revenue: 2869,
        revenuePercent: 25,
      },
    ];

    return Promise.resolve(products);
  }
}

export const topProductsApi = new TopProductsApi();
