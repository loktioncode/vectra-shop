import { defineStore } from 'pinia';

export const x = defineStore('product', {
    state: () => ({
        product: {} as Product,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchProductInfo(apiUrl: string) {
            try {
                this.loading = true;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                this.product = await response.json();
                this.error = null;
            } catch (error) {
                this.error = 'Error fetching product information.';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
    },
});

interface Product {
    name: string;
    description: string;
    price: number;
}

export const useProductStore = defineStore({
    id: 'products',
    state: () => ({
      count: 0,
      name: '张三',
      username: 'zhangsan'
    }),
    actions: {
      increaseCount() {
        this.count++;
      },
      decreaseCount() {
        this.count--;
      }
    },
    getters: {
      oddOrEven: (state) => {
        if (state.count % 2 === 0) {
          return 'even'
        } else {
          return 'odd'
        }
      }
  
    }
  })

