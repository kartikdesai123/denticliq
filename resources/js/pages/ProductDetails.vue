<template>
    <v-container class="pt-7">
        <div align="start">
            <v-col lg="12" cols="12">
                <add-to-cart :is-loading="detailsLoading" :product-details="productDetails" />
                <div cols="12" class="mb-6 prodecdetl">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">description</a>
                        </li>
                        <li class="nav-item" v-if="productDetails.keyspeci != null"> 
                            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Key Specifications</a>
                        </li>
                        <li class="nav-item" v-if="productDetails.profeatures != null">
                            <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Features</a>
                        </li>
                        <li class="nav-item" v-if="productDetails.packaging != null">
                            <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Packaging</a>
                        </li>
                        <li class="nav-item" v-if="productDetails.directiontouse != null">
                            <a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Direction to Use</a>
                        </li>
                        <li class="nav-item" v-if="productDetails.faqs != null">
                            <a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">FAQs</a>
                        </li>
                        <li class="nav-item" v-if="productDetails.warranty != null">
                            <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Warranty</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                            <div v-html="productDetails.description"></div>
                        </div>
                        <div class="tab-pane" id="tabs-2" role="tabpanel">
                            <div v-html="productDetails.keyspeci"></div>
                        </div>
                        <div class="tab-pane" id="tabs-3" role="tabpanel">
                            <div v-html="productDetails.profeatures"></div>
                        </div>
                        <div class="tab-pane" id="tabs-4" role="tabpanel">
                            <div v-html="productDetails.packaging"></div>
                        </div>
                        <div class="tab-pane" id="tabs-5" role="tabpanel">
                            <div v-html="productDetails.directiontouse"></div>
                        </div>
                        <div class="tab-pane" id="tabs-6" role="tabpanel">
                            <div v-html="productDetails.faqs"></div>
                        </div>
                        <div class="tab-pane" id="tabs-7" role="tabpanel">
                            <div v-html="productDetails.warranty"></div>
                        </div>
                    </div>
                   
                </div>
                <div v-if="boughtTogetherProducts.length > 0" class="mb-5">
                    <h2 class="mb-3 fs-21 opacity-80">
                        {{ $t("frequently_bought_together") }}
                    </h2>
                    <swiper :options="carouselOption" class="">
                        <swiper-slide
                            v-for="(product, i) in boughtTogetherProducts"
                            :key="i"
                            class=""
                        >
                            <product-box :product-details="product" :is-loading="togetherLoading" />
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="mb-5"  v-if="moreProducts.length > 0">
                    <h2 class="mb-3 fs-21 opacity-80">
                        {{ $t("more_items_to_explore") }}
                    </h2>
                    <swiper :options="carouselOption" class="">
                        <swiper-slide v-for="(product, i) in moreProducts" :key="i" class="">
                            <product-box :product-details="product" :is-loading="moreLoading" />
                        </swiper-slide>
                    </swiper>
                </div>
               <div class="mb-4"  v-if="relatedProducts.length > 0">
                        <h2 class="mb-3 fs-21 opacity-80">
                                {{ $t("related_products") }}
                        </h2>
                    <swiper :options="carouselOption" class="">
                        <swiper-slide v-for="(product, i) in relatedProducts" :key="i" class="">
                            <product-box :product-details="product" :is-loading="relatedLoading"  box-style="one" />
                        </swiper-slide>
                    </swiper>
                </div>

            </v-col>
            <!--
            <v-col lg="2" cols="12" class="sticky-top right-bar">
                <v-row>
                    <v-col lg="12" md="3" sm="4" cols="12">
                        <template v-if="is_addon_activated('multi_vendor')">
                            <template v-if="detailsLoading">
                                <v-skeleton-loader type="image" height="158" class="mb-3" />
                            </template>
                            <div v-else class="border productboxrightpanel rounded bg-light grey lighten-5 border-gray-300">
                                <div class="fw-700 fs-12 mb-2">{{ $t('shop') }}</div>
                                <div class="d-flex mb-2">
                                    <img :src="productDetails.shop.logo" :alt="productDetails.shop.name" class="flex-shrink-0 border rounded-circle shadow-xl size-50px mb-2">
                                    <div class="fs-13 fw-500 ms-3 mt-2 text-truncate-2 minw-0">{{ productDetails.shop.name }}</div>
                                </div>
                                <div class="d-flex align-center fs-12 mb-2">
                                    <span class="">{{ productDetails.shop.rating.toFixed(2) }}</span>
                                    <v-rating
                                        class="lh-1-5 mx-1"
                                        background-color=""
                                        empty-icon="las la-star"
                                        full-icon="las la-star active"
                                        half-icon="las la-star half"
                                        hover
                                        half-increments
                                        readonly
                                        size="12"
                                        length="5"
                                        :value="productDetails.shop.rating">
                                    </v-rating>
                                    <span class="opacity-50"> ({{ productDetails.shop.review_count }} {{ $t("ratings") }}) </span>
                                </div>
                                <router-link :to="{ name: 'ShopDetails', params: {slug: productDetails.shop.slug}}" class="text-primary fw-500 fs-11">
                                    {{ $t('visit_store') }}
                                </router-link>
                            </div>
                        </template>
                        <template v-if="detailsLoading">
                            <v-skeleton-loader type="image" height="200" class="" />
                        </template>
                        <template v-else>
                            <banner :loading="false" :banner="$store.getters['app/banners'].product_page" class="" />
                        </template>
                        <div v-if="productDetails.has_warranty == 1" class="bg-soft-primary border border-primary d-flex rounded px-4 py-3 mt-3" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.667" height="20" viewBox="0 0 16.667 20" >
                                <g id="Policy" transform="translate(-8.752 -4.644)" > <path id="Path_3102" data-name="Path 3102" d="M17.085,24.644a.7.7,0,0,1-.211-.033,17.254,17.254,0,0,1-6.395-4.9C8.608,17.09,8.647,11.575,8.841,7.654a.368.368,0,0,1,.133-.267.353.353,0,0,1,.28-.077,9.543,9.543,0,0,0,7.578-2.558.354.354,0,0,1,.509,0,9.507,9.507,0,0,0,7.578,2.558.353.353,0,0,1,.28.077.368.368,0,0,1,.133.267c.194,3.921.233,9.436-1.638,12.06a17.431,17.431,0,0,1-6.395,4.9A.7.7,0,0,1,17.085,24.644ZM9.558,8.063c-.172,3.779-.161,8.855,1.516,11.2A16.654,16.654,0,0,0,17.1,23.9a16.743,16.743,0,0,0,6.029-4.634c1.66-2.339,1.67-7.415,1.5-11.2A9.979,9.979,0,0,1,17.1,5.505,10,10,0,0,1,9.558,8.063Z" fill="#b8b8b8"/> <path id="Path_3103" data-name="Path 3103" d="M25.523,30.137a.358.358,0,0,1-.258-.111L23.387,28.1a.359.359,0,1,1,.513-.5l1.613,1.652,3.405-3.724a.359.359,0,0,1,.531.484l-3.66,4a.376.376,0,0,1-.258.118Z" transform="translate(-9.323 -13.133)" fill="#b8b8b8"/> </g>
                            </svg>
                            <span class="ms-2">
                                <div class="fw-700">
                                    {{ $t("warranty_available") }}
                                </div>
                                <router-link :to="{ name: 'CustomPage', params: { pageSlug: 'warranty-policy' }, }" class="text-decoration-underline grey--text fs-12" >
                                    * {{ $t("view_warranty_policy") }}
                                </router-link>
                            </span>
                        </div>


                    </v-col>
                </v-row>
            </v-col>
            -->
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProductReviews from "../components/product/ProductReviews";
import AddToCart from '../components/product/AddToCart.vue';
export default {
    metaInfo() {
        return {
            title: this.metaTitle,
        }
    },
    data: () => ({
        metaTitle: '',
        detailsLoading: true,
        productDetails: {},
        reviewSummary: { average: 0 },
        relatedLoading: true,
        relatedProducts: [{}, {}, {}, {}, {}],
        togetherLoading: true,
        boughtTogetherProducts: [{}, {}, {}, {}, {}],
        moreLoading: true,
        moreProducts: [{}, {}, {}, {}, {}],
        panel: [0,1],
        carouselOption: {
            slidesPerView: 5,
            spaceBetween: 20,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                // when window width is >= 320px
                599: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                // when window width is >= 480px
                960: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                },
                1904: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                },
            },
        },
    }),
    components: {
        ProductReviews,
        AddToCart
    },
    computed: {
    },
    methods: {
        ...mapActions("recentlyViewed", ["addNewRecentlyViewedProduct"]),
        async getDetails() {
            const res = await this.call_api( "get", `product/details/${this.$route.params.slug}`);
            if (res.data.success) {

                this.metaTitle = res.data.data.metaTitle;
                this.productDetails = res.data.data;
                this.reviewSummary = this.productDetails.review_summary;

                this.getRelatedProducts(this.productDetails.id);
                this.getBoughtTogetherProducts(this.productDetails.id);
                this.getMoreProducts(this.productDetails.id);
                this.addNewRecentlyViewedProduct(this.productDetails.id);

            } else {
                this.snack({
                    message: res.data.message,
                    color: "red",
                });
                this.$router.push({ name: "404" });
            }
            this.detailsLoading = false;
        },
        async getRelatedProducts(id) {
            const res = await this.call_api("get", `product/related/${id}`);
            if (res.data.success) {
                this.relatedProducts = res.data.data;
                this.relatedLoading = false;
            }
        },
        async getBoughtTogetherProducts(id) {
            const res = await this.call_api( "get", `product/bought-together/${id}` );
            if (res.data.success) {
                this.boughtTogetherProducts = res.data.data;
                this.togetherLoading = false;
            }
        },
        async getMoreProducts(id) {
            const res = await this.call_api("get", `product/random/10/${id}`);
            if (res.data.success) {
                this.moreProducts = res.data.data;
                this.moreLoading = false;
            }
        },

    },
    async created() {
        this.getDetails();
    },
};
</script>
<style scoped>
@media (max-width: 1263px) {
}
@media (min-width: 1264px) {
    .main-bar {
        max-width: calc(100% - 224px);
    }
    .right-bar {
        width: 224px;
        max-width: 224px;
    }
}
.v-expansion-panel-content__wrap{
    color: black!important;
}
</style>