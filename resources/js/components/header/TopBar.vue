<template>
    <div class="topbar">
        <div v-if="topBannerVisible && !loading && data.top_banner.img" class="position-relative">
            <dynamic-link :to="data.top_banner.link" append-class="text-reset d-block lh-0" >
                 <img :src="data.top_banner.img" class="img-fit h-50px w-100" />
            </dynamic-link>
            <v-btn
                elevation="0" fab outlined x-small class="absolute-top-right rounded border-2 btn-xxs mt-2 me-2" color="white" @click.native="closeTopBanner">
                <i class="las la-times ts-10" />
            </v-btn>
        </div>
        <v-container class="fs-13 py-0 px-0 px-md-3">
            <v-row align="center" class="my-0 d-md-flex">
                <v-col cols="12" class="py-2">
                   <div class="mainticker">
                        <p>SUMMER INCOMING... UP TO 70% OFF ALMOST EVERYTHING!*</p>
                   </div>
                </v-col>
            </v-row>
        </v-container>
        <v-divider class="" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        loading: { type: Boolean, required: true, default: true },
        data: {
            type: Object,
            default: {},
        },
    },
    data: () => ({
        topBannerVisible: false,
        topBanner: {
            image: Vue.helpers.asset("/uploads/img/topbar.jpg"),
            link: "",
        },
        currencies: [
            {
                name: "U.S. Dollar",
                sysmbol: "$",
                code: "USD",
            },
            {
                name: "Taka",
                sysmbol: "Tk",
                code: "BDT",
            },
        ],
        cselectedCurrency: {
            name: "U.S. Dollar",
            sysmbol: "$",
            code: "USD",
        },
        menuCloseOnClick: true,
    }),
    computed: {
        ...mapGetters("app", ["generalSettings"]),
        ...mapGetters("wishlist", ["getTotalWishlisted"]),
        ...mapGetters("compareList", ["getTotalComparedList"]),
        ...mapGetters("app", ["userLanguageObj", "allLanguages", "allCurrencies"]),
    },
    methods: {
        ...mapActions("app", ["fetchProductQuerries"]),
        ...mapActions("wishlist", ["fetchWislistProducts"]),
        ...mapActions("app", ["setLanguage"]),
        switchLanguage(locale) {
            if (this.$i18n.locale !== locale) {
                this.setLanguage(locale);
                window.location.reload();
            }
        },
        closeTopBanner() {
            this.topBannerVisible = false;
            this.setSession("shopTopBanner", "hidden");
        },
    },
    created() {
        if (this.checkSession("shopTopBanner") != "hidden") {
            this.topBannerVisible = true;
        }
        this.fetchWislistProducts();
        this.fetchProductQuerries();
        setInterval(() => {
            this.fetchProductQuerries();
        }, 8000);            
    },
};
</script>
<style scoped>
.topbar {
    position: relative;
    z-index: 2;
    background-color: #fff;
}
</style>
