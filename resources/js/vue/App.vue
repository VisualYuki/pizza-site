<template>
    <div class="container mt-4 mb-4">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link
                        to="/home"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                        >Home</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link
                        to="/cart"
                        class="nav-link"
                        active-class="active"
                        >Cart
                    </router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link
                        to="order"
                        class="nav-link"
                        active-class="active"
                        >Order</router-link
                    >
                </li>-->
            </ul>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>
