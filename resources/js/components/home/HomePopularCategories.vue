<template>
    <div class="mb-5">
        <v-container class="py-0 pe-0 pe-md-3 ps-3 d-none d-md-block d-sm-block d-lg-block">
            <div class="d-flex justify-space-between align-center mb-4 pe-3 pe-md-0">
                <h2 class="main_heading">{{ $t('Trending Category') }}</h2>
                <router-link :to="{ name: 'AllCategories' }" class="py-2 primary--text lh-1 d-inline-block">
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
                <swiper :options="carouselOption" class="">
                    <swiper-slide v-for="(category, i) in categories" :key="i" class="popularcat">
                        <router-link class="" :to="{ name: 'Category', params: {categorySlug: category.slug}}">
                            <img :src="category.banner" :alt="category.name" @error="imageFallback($event)" class="img-fluid ">
                            <h3>{{ category.name }}</h3>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </v-container>
        <v-container class="py-0 pe-0 pe-md-3 ps-3 d-block d-md-none d-sm-none d-lg-none">
            <div class="d-flex justify-space-between align-center mb-4 pe-3 pe-md-0">
                <h2 class="main_heading">{{ $t('Trending Category') }}</h2>
                <router-link :to="{ name: 'AllCategories' }" class="py-2 primary--text lh-1 d-inline-block">
                    {{ $t('view_all') }}
                    <i class="las la-angle-right"></i>
                </router-link>
            </div>
          
                <div v-if="loading">
                    <div class="row">
                        <div class="col-lg-1 col-md-6 col-6 popularcat" v-for="(i) in 8" :key="i" >
                            <v-skeleton-loader type="image" height="186" ></v-skeleton-loader>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="row">
                        <div class="col-lg-1 col-md-6 col-6 popularcat" v-for="(category, i) in categories" :key="i">
                            <router-link class="" :to="{ name: 'Category', params: {categorySlug: category.slug}}">
                                <img :src="category.banner" :alt="category.name" @error="imageFallback($event)" class="img-fluid ">
                                <h3>{{ category.name }}</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
          
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        categories: [],
        carouselOption: {
            slidesPerView: 8,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            breakpoints: {
                0: {
                    slidesPerView: 2.5,
                    spaceBetween: 5
                },
                // when window width is >= 320px
                599: {
                    slidesPerView: 2.5,
                    spaceBetween: 5
                },
                // when window width is >= 480px
                960: {
                    slidesPerView: 6,
                    spaceBetween: 5
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 7,
                    spaceBetween: 5
                },
                1904: {
                    slidesPerView: 8,
                    spaceBetween: 5
                },
            }
        },
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/popular_categories");
        if (res.data.success) {
            this.categories = res.data.data.data
            this.loading = false
        }
    }
}
</script>
<style scoped>
   


</style>