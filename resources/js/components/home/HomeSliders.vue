<template>
    <div class="mb-5">
            <v-row class="gutters-7 md-gutters-10 lh-0" v-if="loading">
                <v-col cols="12" lg="12" md="12" class="">
                    <v-skeleton-loader
                        type="image"
                        height="310"
                        class="loader"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
            <v-row class="mainslider" v-else>
                <v-col cols="12" lg="12" class="">
                    <swiper :options="carouselOption" class="">
                        <swiper-slide v-for="(slider, i) in sliders.one" :key="i" class="">
                            <banner :loading="false" :banner="slider"/>
                        </swiper-slide>
                    </swiper>
                </v-col>
            </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        sliders: null,
        pagination: '.swiper-pagination',
        carouselOption: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
        }
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/sliders");
        if (res.data.success) {
            this.sliders = res.data.data
            this.loading = false
        }
    }
}
</script>
<style scoped>
    .loader{
        height: 200px !important;
    }
    .loader-half{
        height: 92px !important;
    }
    .row.gutters-7 > [class*=col-]{
        padding-top: 7px;
        padding-bottom: 7px;
    }
    .col-lg-6{
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .col-lg-3:nth-of-type(2){
        padding-left: 0px;
    }
    .col-lg-3:nth-of-type(3){
        padding-right: 0px;
    }
    .right-first{
        margin-bottom: 14px;
    }
    .row{
        margin-left: 0;
        margin-right: 0;
    }
    .v-application--is-rtl .col-lg-3:nth-of-type(2){
        padding-left: 7px;
        padding-right: 0;
    }
    .v-application--is-rtl .col-lg-3:nth-of-type(3){
        padding-right: 7px;
        padding-left: 0;
    }
    .swiper-wrapper img{
width:200px;
}

    @media (min-width: 600px) {
        
    }
    @media (min-width: 960px) {
        .loader{
            height: 310px !important;
        }
        .loader-half{
            height: 145px !important;
        }
        .right-first{
            margin-bottom: 20px;
        }
        .row{
            margin-left: -10px;
            margin-right: -10px;
        }
        .row.md-gutters-10 > [class*=col-]{
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .col-lg-6{
            padding-left: 10px !important;
            padding-right: 10px !important;
        }
        .col-lg-3:nth-of-type(2){
            padding-left: 10px;
        }
        .col-lg-3:nth-of-type(3){
            padding-right: 10px;
        }
        .v-application--is-rtl .col-lg-3,
        .v-application--is-rtl .col-lg-3{
            padding-left: 10px !important;
            padding-right: 10px !important;
        }
    }
    @media (min-width: 1264px) {
        
        
    }
    
</style>