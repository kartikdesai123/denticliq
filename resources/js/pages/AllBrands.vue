<template>
    <div class="pb-6" id="brand_sec">
        <v-container>
            <h1 class="main_heading">{{ $t('all_brands') }}</h1>
            <v-row v-if="brands.length" class="">
                <div class="col-lg-1 col-md-6 col-6" v-for="(brand, i) in brands" :key="i">
                    <div v-if="loading">
                        <v-skeleton-loader
                            type="image"
                            class=""
                            height="100"
                        ></v-skeleton-loader>
                    </div>
                    <v-card outlined class="text-center" v-else>
                        <router-link :to="{ name: 'Brand', params: {brandId: brand.id }}" class="align-center d-block d-flex justify-center pa-4 text-reset">
                            <span>
                                <img
                                    class="mw-100 mh-100"
                                    :src="brand.logo"
                                    :alt="brand.name"
                                    @error="imageFallback($event)"
                                />
                            </span>
                        </router-link>
                        <h2>{{ brand.name }}</h2>
                    </v-card>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        brands: [{},{},{},{},{},{}]
    }),
    mounted: () => {},
    methods: {},
    async created() {
        const res = await this.call_api("get", "all-brands");
        if (res.data.success) {
            this.brands = res.data.data
            this.loading = false
        }
    }
}
</script>