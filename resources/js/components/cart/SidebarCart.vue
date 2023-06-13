<template>
    <div class="headcart">
        <button @click.stop="updateCartDrawer(true)">
                                <i class="las la-shopping-bag lh-1"></i>
                                <span class="itemcount">{{ getCartCount }}</span>
        </button>
        <v-navigation-drawer
            class="cart-drawer"
            width="400"
            height="100vh"
            :value="cartDrawerOpen"
            fixed
            temporary
            hide-overlay
            right
            clipped
            @input="updateCartDrawer"
        >
        
            <cart-for-multi v-if="is_addon_activated('multi_vendor')"/>
            <cart-for-single v-else />
            
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import CartForMulti from './CartForMulti';
import CartForSingle from './CartForSingle';
export default {
    components: { CartForMulti, CartForSingle },
    computed: {
        ...mapGetters("cart", [
            "getCartCount",
            "getCartPrice",
            "getTotalCouponDiscount",
        ]),
        ...mapGetters("auth", ["cartDrawerOpen"]),
    },
    methods: {
        ...mapActions("cart", ["fetchCartProducts"]),
        ...mapMutations("auth", ["updateCartDrawer"]),
    },
    created() {
        this.fetchCartProducts();
    }
};
</script>

<style scoped>
.cart-drawer {
    z-index: 610;
}
</style>
