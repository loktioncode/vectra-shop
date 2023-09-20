import { defineStore } from 'pinia';

interface Product {
    name: string;
    description: string;
    price: number;
}

export const useProductStore = defineStore({
    id: 'products',
    state: () => ({
        products: {} as Product[],
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

                this.products = await response.json();
                this.error = null;
            } catch (error) {
                this.error = 'Error fetching product information.';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
    },
    getters: {


    }
})

