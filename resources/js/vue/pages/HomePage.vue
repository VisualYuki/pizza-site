<template>
    <div class="row g-3 align-items-stretch">
        <template v-if="!productItems">
            <div
                class="spinner-border"
                style="width: 5rem; height: 5rem"
                role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
        </template>
        <template v-else>
            <ProductItem
                v-for="(productInfo, index) in productItems"
                :productInfo="productInfo"
                :key="index"
                @refresh="refresh"
            />
        </template>
    </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
    name: "HomePage",
    components: {
        ProductItem,
    },
    data() {
        return {
            productItems: null,
        };
    },
    mounted() {
        this.refresh();
    },
    methods: {
        refresh() {
            axios.get("/api/products").then((response) => {
                this.productItems = response.data;
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
