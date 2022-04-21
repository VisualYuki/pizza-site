<template>
    <div>
        <template v-if="isLoading">
            <div
                class="spinner-border"
                style="width: 5rem; height: 5rem"
                role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
        </template>
        <template v-else>
            <template v-if="count">
                <RowPizzaItem
                    v-for="(item, index) in cartPizzas"
                    :pizzaInfo="item"
                    :key="index"
                    @refresh="refresh"
                ></RowPizzaItem>
                <p class="h3 mt-4" style="text-align: center">
                    Total price :
                    <span class="fw-bold">{{ totalPrice }} Rub.</span>
                </p>
            </template>
            <template v-else> Empty cart </template>
        </template>
    </div>
</template>

<script>
import RowPizzaItem from "../components/RowPizzaItem.vue";

export default {
    name: "CartPage",
    components: {
        RowPizzaItem,
    },
    data() {
        return {
            cartPizzas: null,
            count: 0,
            totalPrice: 0,
            isLoading: true,
        };
    },

    mounted() {
        this.refresh();
        this.getCount();
        this.getTotalPrice();
    },
    methods: {
        refresh() {
            axios.get("/api/cart").then((response) => {
                this.cartPizzas = response.data;
                this.isLoading = false;
            });
            this.getCount();
            this.getTotalPrice();
        },
        getCount() {
            axios.get("/api/cart/count").then((response) => {
                this.count = response.data;
            });
        },
        getTotalPrice() {
            axios.get("/api/cart/total-price").then((response) => {
                this.totalPrice = response.data;
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
