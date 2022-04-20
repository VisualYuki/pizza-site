<template>
    <div class="card mb-2">
        <div class="row">
            <div class="col">
                <img src="/images/pizza-img.jpg" class="card-img-top" alt="" />
            </div>
            <div class="col d-flex align-items-center">
                <h3 class="card-title">{{ pizzaInfo.name }}</h3>
            </div>
            <div class="col d-flex align-items-center">
                <span class="btn btn-primary" @click="removeFromCart"
                    >Remove from cart</span
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PizzaItem",
    props: {
        pizzaInfo: {
            required: true,
            type: Object,
        },
    },
    methods: {
        removeFromCart() {
            axios
                .post("/api/cart/remove", {
                    id: this.pizzaInfo.id,
                })
                .then((response) => {
                    this.$emit("refresh");
                });
        },
    },
};
</script>

<style scoped></style>
