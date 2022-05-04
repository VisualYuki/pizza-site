<template>
    <div class="col-12 col-sm-6 col-md-4">
        <div class="card h-100">
            <img :src="productInfo.image" class="card-img-top" alt="" />
            <div class="labels">
                <div class="badge bg-danger fs-5" v-if="productInfo.hit">
                    Хит продаж
                </div>
                <div class="badge bg-warning fs-5" v-if="productInfo.new">
                    Новое
                </div>
                <div class="badge bg-info fs-5" v-if="productInfo.recommend">
                    Рекомендовано
                </div>
            </div>

            <div class="card-body">
                <h3 class="card-title">{{ productInfo.name }}</h3>
                <p class="card-text pizza-desc mb-3" style="min-height: 70px">
                    {{ productInfo.desc }}
                </p>
                <div
                    class="d-flex justify-content-between align-items-center mb-2"
                >
                    <div class="h6">Price:</div>
                    <div class="fw-bold h5">{{ productInfo.price }} Rub.</div>
                </div>

                <button
                    :class="{
                        disabled: productInfo.in_cart,
                        'btn-danger text-danger': productInfo.in_cart,
                    }"
                    class="btn btn-outline-primary"
                    @click="addToCart"
                >
                    <span v-if="productInfo.in_cart"> Already in cart </span>
                    <span v-else>Add to cart</span>
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
        addToCart() {
            axios
                .post("/api/cart/add", {
                    id: this.productInfo.id,
                })
                .then((response) => {
                    this.$emit("refresh");
                });
        },
        removeFromCart() {
            axios
                .post("/api/cart/remove", {
                    id: this.productInfo.id,
                })
                .then((response) => {
                    this.$emit("refresh");
                });
        },
    },
};
</script>

<style scoped lang="scss">
.pizza-desc {
    margin: 0;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.labels {
    position: absolute;
    left: 10px;
    top: 10px;
}
</style>
