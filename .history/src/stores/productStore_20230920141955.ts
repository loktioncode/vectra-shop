import { defineStore } from 'pinia';

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        product: {},
        loading: false,
        error: null,
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
            } catch (error: any) {
                error = 'Error fetching product information.';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
    },
});
