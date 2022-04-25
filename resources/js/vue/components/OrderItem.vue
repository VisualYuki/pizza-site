<template>
    <tr>
        <th scope="row">{{ orderItem.order_id }}</th>
        <td>{{ orderItem.registration_date }}</td>
        <td>-</td>
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

<style lang="scss" scoped></style>
