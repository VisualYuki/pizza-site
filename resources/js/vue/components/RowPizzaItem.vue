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
                    {{ pizzaInfo.name }}
                </h3>
                <p class="card-text">
                    {{ pizzaInfo.desc }}
                </p>

                <div
                    class="d-flex justify-content-between align-items-center mb-2"
                >
                    <div class="h6 me-2">Price:</div>
                    <div class="fw-bold h5">{{ pizzaInfo.price }} Rub.</div>
                </div>
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
