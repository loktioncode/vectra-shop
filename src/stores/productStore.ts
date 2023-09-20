import { defineStore } from 'pinia';

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: { name: string };
}

export const useProductStore = defineStore({
    id: 'products',
    state: () => ({
        products: [] as Product[],
        filteredProducts: [] as Product[], // Initialize as an empty array of the correct type
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

        // action to update filteredProducts based on search term
        updateFilteredProducts(searchTerm: string) {
            if (searchTerm) {
                this.searchTerm = searchTerm.toLowerCase();
                this.filteredProducts = this.products.filter(product =>
                    product.title.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.name.toLowerCase().includes(searchTerm) ||
                    product.price.toString().includes(searchTerm)

                );
            } else {
                this.searchTerm = '';
                this.filteredProducts = [...this.products];
            }
        },
        sortProducts(sortType: string) {
            if (sortType) {
                switch (sortType) {
                    case 'price-asc':
                        return this.filteredProducts.sort((a, b) => a.price - b.price);
                    case 'price-desc':
                        return this.filteredProducts.sort((a, b) => b.price - a.price);
                    case 'cat-alpha':
                        return this.filteredProducts.sort((a, b) => a.category.name.localeCompare(b.category.name));
                    default:
                        return this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
                }
            }
        },

    },
});

