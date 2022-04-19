<template>
    <div class="col-6 col-md-3">
        <div class="card">
            <img src="/images/pizza-img.jpg" class="card-img-top" alt="" />
            <div class="card-body">
                <h3 class="card-title">{{ pizzaInfo.name }}</h3>
                <p class="card-text">
                    {{ pizzaInfo.desc }}
                </p>
                <div class="row mb-2">
                    <div class="col">Price:</div>
                    <div class="col fw-bold">{{ pizzaInfo.price }}</div>
                </div>

                <a href="#" class="btn btn-primary" @click="addToCart"
                    >Add to cart</a
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
        addToCart() {
            axios.post("/add-pizza-to-cart", {
                id: this.pizzaInfo.id,
            });
        },
    },
};
</script>

<style scoped></style>
