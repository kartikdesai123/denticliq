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
        <div class="marquee-container">
            <div class="mainticker">
                 <marquee scrollamount="5" direction="left"><p>{{ topbartext }}</p></marquee>
            </div>
        </div>

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
        topbartext:"",
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
        async getTopBannerData() {
            const res = await this.call_api("get", "setting/home/top_banner_text");
            if (res.data.success) {
                this.topbartext = res.data.data
                this.loading = false
            }
        },
    },
    created() {
        if (this.checkSession("shopTopBanner") != "hidden") {
            this.topBannerVisible = true;
        }
        this.fetchWislistProducts();
        this.fetchProductQuerries();
        this.getTopBannerData();
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
