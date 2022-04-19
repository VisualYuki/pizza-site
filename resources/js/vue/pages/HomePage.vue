<template>
    <div class="row g-2">
        <template v-if="!pizzaInfos">
            <div
                class="spinner-border"
                style="width: 5rem; height: 5rem"
                role="status"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>loading ...</p>
        </template>
        <template v-else>
            <PizzaItem
                v-for="(pizzaInfo, index) in pizzaInfos"
                :pizzaInfo="pizzaInfo"
                :key="index"
            />
        </template>
    </div>
</template>

<script>
import PizzaItem from "../components/PizzaItem.vue";

export default {
    name: "HomePage",
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
