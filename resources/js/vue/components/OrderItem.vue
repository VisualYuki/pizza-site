<template>
    <tr>
        <td scope="row">{{ orderItem.id }}</td>
        <td>{{ orderItem.registration_date }}</td>
        <td>
            <div v-for="(product, index) in orderItem.products" :key="index">
                {{ product.name }} {{ product.price }} Rub. -
                {{ product.count }}x
            </div>
        </td>
        <td>{{ orderItem.total_price }} Rub.</td>
        <td>{{ orderItem.phone }}</td>
        <td>{{ orderItem.street }}</td>
        <td>{{ orderItem.name }}</td>
    </tr>
</template>

<script>
export default {
    name: "",
    props: {
        orderItem: {
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
td {
    vertical-align: middle;
}
</style>
