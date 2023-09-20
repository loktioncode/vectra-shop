 <template>
  <div class="flex flex-col md:flex-row items-center w-full py-5 space-y-2 md:space-y-0 md:space-x-2">
    <!-- Filter Items for Mobile (Centered) -->
    <div class="md:hidden flex flex-col items-center w-full">
      <!-- Product Count Display -->
      <div class="text-lg mb-2 w-full">
        Total Products: {{ filteredProducts.length }}
      </div>

      <!-- Search Form -->
      <div class="flex items-center w-full">
        <label for="search" class="sr-only">Search</label>
        <input
          v-model="searchTerm"
          id="search"
          type="text"
          placeholder="Search products..."
          class="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          @click="clearSearch"
          v-if="searchTerm"
          class="text-red-500 hover:text-red-700 focus:outline-none"
        >
          Clear
        </button>
      </div>
    </div>

    <!-- Filter Items for Desktop -->
    <div class="hidden md:flex justify-start items-center w-6/12">
      <!-- Product Count Display -->
      <div class="text-lg mb-2 w-4/12">
        Total Products: {{ filteredProducts.length }}
      </div>

      <!-- Search Form -->
      <div class="flex items-center w-7/12">
        <label for="search" class="sr-only">Search</label>
   
        <fieldset class="w-full space-y-1 dark:text-gray-100">
		<label for="Search" class="hidden">Search</label>
		<div class="relative">
			<span class="absolute inset-y-0 left-0 flex items-center pl-2">
				<button type="button" title="search" class="p-1 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" class="w-4 h-4 dark:text-gray-100">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span>
			<input v-model="searchTerm" type="search" name="Search" placeholder="Search..." class="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400">
		</div>
	</fieldset>
        <button
          @click="clearSearch"
          v-if="searchTerm"
          class="text-red-500 hover:text-red-700 focus:outline-none"
        >
          Clear
        </button>
      </div>
    </div>

    <!-- Sort Dropdown -->
    <div class="flex justify-end w-6/12 md:w-auto pr-12">
      <div class="relative inline-block text-gray-700">
        <select
          v-model="selectedSortOption"
          class="block appearance-none w-full md:w-auto bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:ring"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <!-- Add more sorting options as needed -->
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M8.293 11.293a1 1 0 001.414 0L12 8.414V18a1 1 0 102 0V8.414l2.293 2.293a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

  
  

<script setup lang="ts">
import { ref, computed } from 'vue';

// Sample product data (replace with your actual data)
const products = [
    { id: 1, name: 'Product 1', price: 20.0 },
    { id: 2, name: 'Product 2', price: 30.0 },
    { id: 3, name: 'Product 3', price: 15.0 },
    // Add more products as needed
];

const searchTerm = ref('');
const selectedSortOption = ref('default');

const clearSearch = () => {
    searchTerm.value = '';
};

const filteredProducts = computed(() => {
    let result = [...products];

    if (searchTerm.value) {
        result = result.filter(product =>
            product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    }

    if (selectedSortOption.value === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption.value === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    }

    return result;
});
</script>
