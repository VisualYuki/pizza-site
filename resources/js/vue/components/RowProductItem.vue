<template>
    <div class="card mb-2 p-3">
        <div class="row">
            <div class="col-3">
                <img
                    src="/images/pizza-img.jpg"
                    class="d-md-block d-none"
                    style="height: 150px"
                />
            </div>
            <div
                class="col-10 col-md-6 col d-flex align-items-start justify-content-center flex-column"
            >
                <h3 class="card-title text-nowrap mb-2">
                    {{ productInfo.name }}
                </h3>
                <p class="card-text">
                    {{ productInfo.desc }}
                </p>

                <div
                    class="d-flex justify-content-between align-items-center mb-2"
                >
                    <div class="h6 me-2">Price:</div>
                    <div class="fw-bold h5">{{ productInfo.price }} Rub.</div>
                </div>
            </div>

            <div
                class="col-2 d-flex flex-column align-items-center justify-content-center"
            >
                <button class="btn btn-success" @click="incrementCount">
                    +
                </button>
                <span>{{ productInfo.count }}</span>
                <button
                    class="btn btn-danger"
                    :class="{ disabled: productInfo.count == 1 }"
                    @click="decrementCount"
                >
                    -
                </button>
            </div>

            <div class="col-1 d-flex align-items-center justify-content-end">
                <button class="btn btn-danger" @click="removeFromCart">
                    &times;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        productInfo: {
            required: true,
            type: Object,
        },
    },
    methods: {
        removeFromCart() {
            axios
                .post("/api/cart/remove", {
                    id: this.productInfo.id,
                })
                .then((response) => {
                    this.$emit("refresh");
                });
        },
        incrementCount() {
            axios
                .post("/api/cart/increment-count", {
                    id: this.productInfo.id,
                })
                .then((response) => {
                    this.$emit("refresh");
                });
        },
        decrementCount() {
            axios
                .post("/api/cart/decrement-count", {
                    id: this.productInfo.id,
                })
                .then((response) => {
                    this.$emit("refresh");
                });
        },
    },
};
</script>

<style scoped></style>
