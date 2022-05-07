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
                <RowProductItem
                    v-for="(item, index) in cartProducts"
                    :productInfo="item"
                    :key="index"
                    @refresh="refresh"
                ></RowProductItem>

                <div
                    class="p-4 mt-4 border border-info rounded"
                    style="background: white; max-width: 700px; margin: 0 auto"
                >
                    <div class="mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            v-model="form.name"
                        />
                    </div>
                    <div class="mb-3">
                        <input
                            type="phone"
                            class="form-control"
                            placeholder="Phone"
                            v-model="form.phone"
                        />
                    </div>
                    <div class="mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Street"
                            v-model="form.street"
                        />
                    </div>
                    <div class="mb-3">
                        <textarea
                            class="form-control"
                            rows="3"
                            name="comment"
                            placeholder="Comment"
                            v-model="form.comment"
                        ></textarea>
                    </div>

                    <p class="h3 mt-5" style="text-align: center">
                        Total price :
                        <span class="fw-bold">{{ totalPrice }} Rub.</span>
                    </p>

                    <button
                        class="btn btn-primary"
                        style="margin: 0 auto; display: block"
                        @click="buy"
                    >
                        Buy
                    </button>
                    <p class="text-danger">
                        <template v-for="errorMessageArray in errorMessages">
                            <template v-for="errorMessage in errorMessageArray">
                                <span :key="errorMessage">{{
                                    errorMessage
                                }}</span>
                            </template>
                        </template>
                    </p>
                </div>
            </template>
            <template v-else> Empty cart </template>
        </template>
    </div>
</template>

<script>
import RowProductItem from "../components/RowProductItem.vue";

export default {
    name: "CartPage",
    components: {
        RowProductItem,
    },
    data() {
        return {
            cartProducts: null,
            totalPrice: 0,
            isLoading: true,
            form: {
                name: "",
                phone: "",
                street: "",
                comment: null,
            },
            isError: false,
            errorMessages: undefined,
        };
    },

    mounted() {
        this.refresh();
    },
    computed: {
        count() {
            return this.cartProducts.length;
        },
    },
    methods: {
        buy() {
            axios
                .post("/api/cart/buy", {
                    name: this.form.name,
                    phone: this.form.phone,
                    street: this.form.street,
                    comment: this.form.comment,
                })
                .then((response) => {
                    this.$router.push("/order");
                })
                .catch((error) => {
                    this.isError = true;

                    this.errorMessages = error.response.data.errors;
                });
        },
        refresh() {
            axios.get("/api/cart").then((response) => {
                this.cartProducts = response.data;
                this.isLoading = false;
            });

            this.getTotalPrice();
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
