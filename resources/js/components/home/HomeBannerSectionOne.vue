<template>
    <v-container class="py-0 px-0 px-md-3">
        <swiper :options="carouselOption" class="mb-4">
            <swiper-slide v-for="(banner, i) in banners" :key="i" class="">
                <banner :loading="loading" :banner="banner"/>
            </swiper-slide>
        </swiper>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        loading: true ,
        banners: [],
        carouselOption: {
            slidesPerView: 1,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
        },
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/banner_section_one");
        if (res.data.success) {
            this.banners = res.data.data
            this.loading = false
        }
    }
}
</script>