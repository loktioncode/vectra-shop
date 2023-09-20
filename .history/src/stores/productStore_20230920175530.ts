import { defineStore } from 'pinia';

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
}

export const useProductStore = defineStore({
    id: 'products',
    state: () => ({
        products: [] as Product[],
        filteredProducts: [] as Product[], // Add a new state property
        loading: false,
        error: null as string | null,
        searchTerm: '' as string
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

                // Initialize filteredProducts with all products
                this.filteredProducts = [...this.products];
            } catch (error) {
                this.error = 'Error fetching product information.';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },

        //  action to update filteredProducts based on search term
        updateFilteredProducts(searchTerm: string) {
            if (searchTerm) {
                this.searchTerm = searchTerm;
                this.products = this.products.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else {
                // If searchTerm is empty, show all products
                this.filteredProducts = [...this.products];
            }
        },
    },
});
