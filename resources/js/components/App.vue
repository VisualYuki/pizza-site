<template>
    <router-view />
</template>

<script>
export default {
    name: "App",
    mounted() {
        console.log("hello from component");
    },
};
</script>
