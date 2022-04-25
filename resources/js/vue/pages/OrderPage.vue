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
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Products</th>
                            <th scope="col">Total price</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Street</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <OrderItem
                            v-for="(item, index) in orderItems"
                            :orderItem="item"
                            :key="index"
                        ></OrderItem>
                    </tbody>
                </table>
            </template>
            <template v-else> Empty orders </template>
        </template>
    </div>
</template>

<script>
import OrderItem from "../components/OrderItem.vue";

export default {
    name: "OrderPage",
    components: {
        OrderItem,
    },
    data() {
        return {
            isLoading: true,
            orderItems: undefined,
        };
    },
    mounted() {
        axios.get("/api/order").then((response) => {
            this.isLoading = false;
            this.orderItems = response.data;
        });
    },
    computed: {
        count() {
            return this.orderItems.length;
        },
    },
};
</script>

<style lang="scss" scoped></style>
