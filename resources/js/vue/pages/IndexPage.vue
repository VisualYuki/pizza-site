<template>
    <div class="row g-2">
        <PizzaItem
            v-for="(pizzaInfo, index) in pizzaInfos"
            :pizzaInfo="pizzaInfo"
            :key="index"
        />
    </div>
</template>

<script>
import PizzaItem from "../components/PizzaItem.vue";

export default {
    name: "IndexPage",
    components: {
        PizzaItem,
    },
    data() {
        return {
            pizzaInfos: null,
        };
    },
    mounted() {
        axios.get("/api/pizza-infos").then((response) => {
            this.pizzaInfos = response.data;
        });
    },
};
</script>

<style lang="scss" scoped></style>
