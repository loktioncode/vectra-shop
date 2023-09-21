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
        searchTerm: '' as string,
        selectedCategory: '' as string,
        sortType: '' as string
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
        sortByCategory(selectedCategory: string) {
            this.selectedCategory = selectedCategory; // Update selectedCategory

            if (selectedCategory !== 'on') {
                this.filteredProducts = this.products.filter(product =>
                    product.category.name.toLowerCase().includes(selectedCategory.toLowerCase())
                );
            } else {
                this.filteredProducts = [...this.products];
            }
        },
        sortProducts(sortType: string) {
            
            if (sortType) {
                switch (sortType) {
                    case 'price-asc':
                        this.filteredProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-desc':
                        this.filteredProducts.sort((a, b) => b.price - a.price);
                        break;
                    case 'cat-alpha':
                        // Sort the filtered products by category name
                        this.filteredProducts.sort((a, b) => a.category.name.localeCompare(b.category.name));
                        break;
                    default:
                        // Sort the filtered products by title
                        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                }
            }
        },



    },
    getters: {
        getCategories: (state) => {
            const categorySet = new Set<string>();

            if (state.products) {
                state.products.forEach((product) => {
                    categorySet.add(product.category.name);
                });
            } else {
                return [];
            }

            const categories = Array.from(categorySet);

            return categories.length ? categories : [];
        }
    }
});

