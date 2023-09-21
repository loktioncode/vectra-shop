import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();

export const loadFromLocalStorage1 = (searchItem: any) => {
    if (searchItem) {
        productStore.searchTerm = searchItem;
    }
};