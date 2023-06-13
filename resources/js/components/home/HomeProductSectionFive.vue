<template>
    <div class="mb-5" id="section1">
        <v-container class="py-0">
            <h2 class="main_heading">{{ title }}</h2>
            <div v-if="loading">
                <swiper ref="c1" class="" :options="carouselOption" >
                    <swiper-slide v-for="(i) in 8" :key="i"  class="">
                        <v-skeleton-loader type="image" height="186" ></v-skeleton-loader>
                    </swiper-slide>
                </swiper>
            </div>
            <div v-else>
                <swiper ref="c2" :options="carouselOption" class="">
                    <swiper-slide v-for="(product, i) in products" :key="i" class="">
                        <product-box :product-details="product" :is-loading="loading" />
                    </swiper-slide>
                </swiper>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true ,
        title: '' ,
        products: [],
        carouselOption: {
            slidesPerView: 6,
            spaceBetween: 20,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                // when window width is >= 320px
                599: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                // when window width is >= 480px
                960: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                },
                1904: {
                    slidesPerView: 6,
                    spaceBetween: 5,
                },
            }
        },
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/product_section_five");
        if (res.data.success) {
            this.title = res.data.data.title
            this.products = res.data.data.products.data
            this.loading = false
        }
    }
}
</script>