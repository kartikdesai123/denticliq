<template>
    <div class="mb-5 pb-5" style="background-color: aliceblue;">
        <v-container class="py-0 pe-0 pe-md-3 ps-3">
            <div class="d-flex justify-space-between align-center mb-4 pe-3 pe-md-0">
                <h2 class="main_heading">{{ $t('Top Brands') }}</h2>
                <router-link :to="{ name: 'AllBrands' }" class="py-2 primary--text lh-1 d-inline-block">
                    {{ $t('view_all') }}
                    <i class="las la-angle-right"></i>
                </router-link>
            </div>
            <div v-if="loading">
                <swiper class="" :options="carouselOption" >
                    <swiper-slide v-for="(i) in 8" :key="i"  class="">
                        <v-skeleton-loader type="image" height="186" ></v-skeleton-loader>
                    </swiper-slide>
                </swiper>
            </div>
            <div v-else>
                <swiper :options="carouselOption" class="" id="brand_sec">
                    <swiper-slide v-for="(brand, i) in brands" :key="i" class="popularcat">
                        <router-link class="" :to="{ name: 'Brand', params: {brandId: brand.id}}">
                            <img :src="brand.logo" :alt="brand.name" @error="imageFallback($event)" class="img-fluid ">
                            <h3>{{ brand.name }}</h3>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        brands: [],
        carouselOption: {
            slidesPerView: 8,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            breakpoints: {
                0: {
                    slidesPerView: 4.5,
                    spaceBetween: 12
                },
                // when window width is >= 320px
                599: {
                    slidesPerView: 5,
                    spaceBetween: 16
                },
                // when window width is >= 480px
                960: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 7,
                    spaceBetween: 20
                },
                1904: {
                    slidesPerView: 8,
                    spaceBetween: 20
                },
            }
        },
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/top_brands");
        if (res.data.success) {
            this.brands = res.data.data
            this.loading = false
        }
    }
}
</script>
<style scoped>

</style>