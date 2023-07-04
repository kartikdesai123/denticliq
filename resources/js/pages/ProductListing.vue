<template>
    <div>
        <v-container class="pt-md-7 px-0 px-md-3 pb-0">
            <banner :loading="false" :banner="$store.getters['app/banners'].listing_page"/>
        </v-container>
        <v-container class="pt-0">
            <div class="row">
                <div class="col-lg-3 sticky-top">
                    <div :class="['border-end filter-drawer', {'open c-scrollbar overflow-y-auto':filterDrawerOpen}]">
                        <div class="border-bottom pa-5 d-lg-none d-flex align-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path id="Path_2643" data-name="Path 2643" d="M20,5H18.829a3,3,0,0,0-5.659,0H4A1,1,0,0,0,4,7h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2ZM16,7a1,1,0,1,0-1-1A1,1,0,0,0,16,7ZM3,12a1,1,0,0,1,1-1H5.171a3,3,0,0,1,5.659,0H20a1,1,0,0,1,0,2H10.829a3,3,0,0,1-5.659,0H4A1,1,0,0,1,3,12Zm5,1a1,1,0,1,0-1-1A1,1,0,0,0,8,13ZM4,17a1,1,0,0,0,0,2h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2H18.829a3,3,0,0,0-5.659,0Zm13,1a1,1,0,1,1-1-1A1,1,0,0,1,17,18Z" transform="translate(-3 -3)" fill="#2a2e34" fill-rule="evenodd"/>
                            </svg>
                            <span class="ms-4 fw-600 fs-14 lh-1">{{ $t('filters') }}</span>
                            <button class="ms-auto" @click.stop="toggleFilterDrawer(!filterDrawerOpen)" type="button">
                                <i class="la la-close fs-20"></i>
                            </button>
                        </div>
                        <div>
                            <div class="productleftside">
                                <h4 class="fw-700 fs-14 mb-4 border-bottom pb-3">{{ $t('categories') }}</h4>
                                <div>
                                    <ul class="list-unstyled ps-0">
                                        <template v-if="is_empty_obj(currentCategory)">
                                            <li v-for="(category,i) in rootCategories" :key="i" class="my-2">
                                                <router-link
                                                    :to="{ name: 'Category', params: {categorySlug: category.slug}}"
                                                    class="text-reset fs-14"
                                                >{{ category.name }}</router-link>
                                            </li>
                                        </template>
                                        <template v-else>
                                            <li class="my-2">
                                                <router-link :to="{ name: 'Shop'}" class="text-reset fs-14" >
                                                    <i class="las la-angle-left fs-12 me-1"></i>
                                                    <span>{{ $t('all_categories') }}</span>
                                                </router-link>
                                            </li>
                                            <li class="my-2" v-if="!is_empty_obj(parentCategory)">
                                                <router-link
                                                    :to="{ name: 'Category', params: {categorySlug: parentCategory.slug}}"
                                                    class="text-reset fs-14"
                                                >
                                                    <i class="las la-angle-left fs-12 me-1"></i>
                                                    <span>{{ parentCategory.name }}</span>
                                                </router-link>
                                            </li>
                                            <li :class="['my-2',{'ms-5':childCategories.length == 0}]">
                                                <router-link
                                                    :to="{ name: 'Category', params: {categorySlug: currentCategory.slug}}"
                                                    class="text-reset fs-14 fw-600"
                                                >
                                                    <i class="las la-angle-down fs-12 me-1" v-if="childCategories.length > 0"></i>
                                                    <span>{{ currentCategory.name }}</span>
                                                </router-link>
                                            </li>
                                            <li class="my-2 ms-5" v-for="(category, i) in childCategories" :key="i">
                                                <router-link
                                                    :to="{ name: 'Category', params: {categorySlug: category.slug}}"
                                                    class="text-reset fs-14"
                                                >
                                                    <span>{{ category.name }}</span>
                                                </router-link>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                            <div class="productleftside searchprice">
                                <h4 class="fw-700 fs-14 mb-3">{{ $t('price') }}</h4>
                                <div class="row no-gutters align-center">
                                    <div class="col">
                                        <v-text-field type="number"
                                        class="form-control form-control-sm"
                                        v-model="queryParam.minPrice" :placeholder="$t('min_price')"
                                        outlined hide-details></v-text-field>
                                    </div>
                                    <span>to</span>
                                    <div class="col">
                                        <v-text-field type="number"
                                        class="form-control form-control-sm"
                                        v-model="queryParam.maxPrice" :placeholder="$t('max_price')"
                                        outlined hide-details></v-text-field>
                                    </div>
                                    <div class="col col-auto m-0 pl-0 pr-0">
                                        <v-btn x-small fab type="submit"
                                        color="primary" class="rounded ms-2"
                                        elevation="0" @click.native="filterByPriceRange">{{ $t('go') }}</v-btn >
                                    </div>
                                </div>
                            </div>
                            <div class="productleftside" v-if="!isBrandRoute">
                                <h4 class="fw-700 fs-14 mb-3">{{ $t('brands') }}</h4>
                                <div v-if="allBrands.length < 5">
                                    <v-checkbox
                                        on-icon="la-check"
                                        class="mt-1"
                                        hide-details
                                        v-for="(brand,i) in allBrands"
                                        :key="i"
                                        :label="brand.name"
                                        @change="brandChange(brand.id)"
                                    ></v-checkbox>
                                </div>
                                <ShowMore v-else>
                                    <v-checkbox
                                        on-icon="la-check"
                                        class="mt-1"
                                        hide-details
                                        v-for="(brand,i) in allBrands"
                                        :key="i"
                                        :label="brand.name"
                                        @change="brandChange(brand.id)"
                                    ></v-checkbox>
                                </ShowMore>
                            </div>
                            <div class="productleftside" v-for="(attribute, i) in attributes" :key="i">
                                <h4 class="fw-700 fs-14 mb-3">{{ attribute.name }}</h4>
                                <div v-if="attribute.values.data.length < 5">
                                    <v-checkbox
                                        on-icon="la-check"
                                        class="mt-1"
                                        hide-details
                                        v-for="(value,j) in attribute.values.data"
                                        :key="j"
                                        :label="value.name"
                                        @change="attributeValueChange(value.id)"
                                    ></v-checkbox>
                                </div>
                                <ShowMore v-else>
                                    <v-checkbox
                                        on-icon="la-check"
                                        class="mt-1"
                                        hide-details
                                        v-for="(value,j) in attribute.values.data"
                                        :key="j"
                                        :label="value.name"
                                        @change="attributeValueChange(value.id)"
                                    ></v-checkbox>
                                </ShowMore>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="pt-5 ps-lg-7">
                    <div v-if="isBrandRoute">
                        <v-row align="end" class="mb-3">
                            <v-col cols="12" sm>
                                <div class="d-flex align-center">
                                    <div>
                                        <h1 class="fs-18">Selected Brand</h1>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div class="mb-7">

                            <v-row v-if="selectedBrand.length > 0">
                                <div class="col-md-2 col-4" v-for="(brand, i) in selectedBrand" :key="i">
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
                                        <p>{{ brand.name }}</p>
                                    </v-card>
                                </div>
                            </v-row>
                        </div>
                        <v-row align="end" class="mb-3">
                            <v-col cols="12" sm>
                                <div class="d-flex align-center">
                                    <div>
                                        <h1 class="fs-18">Related Category</h1>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div class="mb-7">
                             <v-row class="relcatgory" v-if="relatedCategory.length > 0">
                                <div class="col-md-2 col-4" v-for="(category, i) in relatedCategory" :key="i">
                                    <div v-if="loading">
                                        <v-skeleton-loader
                                            type="image"
                                        ></v-skeleton-loader>
                                    </div>
                                    <v-card outlined class="text-center" v-else>
                                        <router-link :to="{ name: 'Category', params: {categorySlug: category.slug}}" class="align-center d-block d-flex justify-center text-reset">
                                            <span>
                                                <img
                                                    :src="category.banner"
                                                    :alt="category.name"
                                                    @error="imageFallback($event)"
                                                />
                                            </span>
                                        </router-link>
                                        <p>{{ category.name }}</p>
                                    </v-card>
                                </div>
                            </v-row>
                        </div>


                        </div>


                        <v-row align="end" class="mb-3">
                            <v-col cols="12" sm>
                                <div class="d-flex align-center">
                                    <div>
                                        <h1 class="fs-18" v-if="queryParam.keyword">{{ $t('search_results_for') }} "{{ queryParam.keyword  }}"</h1>
                                        <h1 class="fs-18" v-else-if="!is_empty_obj(currentCategory)">{{ currentCategory.name }}</h1>
                                        <h1 class="fs-18" v-else>{{ $t('all_products') }}</h1>
                                        <p class="opacity-60 mb-0 fs-12">{{ $t('total')+' '+totalProducts+' '+$t('products_found')  }}</p>
                                    </div>
                                    <div class="d-lg-none ms-auto ms-sm-0">
                                        <button class="ms-4 pa-2 border-gray-300 rounded border d-flex justify-center align-center" @click.stop="toggleFilterDrawer(!filterDrawerOpen)" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                <path id="Path_2643" data-name="Path 2643" d="M20,5H18.829a3,3,0,0,0-5.659,0H4A1,1,0,0,0,4,7h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2ZM16,7a1,1,0,1,0-1-1A1,1,0,0,0,16,7ZM3,12a1,1,0,0,1,1-1H5.171a3,3,0,0,1,5.659,0H20a1,1,0,0,1,0,2H10.829a3,3,0,0,1-5.659,0H4A1,1,0,0,1,3,12Zm5,1a1,1,0,1,0-1-1A1,1,0,0,0,8,13ZM4,17a1,1,0,0,0,0,2h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2H18.829a3,3,0,0,0-5.659,0Zm13,1a1,1,0,1,1-1-1A1,1,0,0,1,17,18Z" transform="translate(-3 -3)" fill="#2a2e34" fill-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="auto">
                                <v-select v-model="sortingDefault" :items="sortingOptions" item-text="name" item-value="value" :menu-props="{ offsetY: true }" append-icon="la-angle-down fs-14" flat solo outlined hide-details @change="sortUpdate">
                                    <template v-slot:selection="{ item }">
                                        <span class="fs-13 d-flex align-center opacity-80">
                                            <span class="opacity-60 mx-1">{{ $t('sort_by') }}:</span>
                                            <span>{{ item.name }}</span>
                                        </span>
                                    </template>
                                </v-select>
                            </v-col>
                        </v-row>
                        <div class="mb-7">
                            <v-row class="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 md-gutters-10"
                            v-if="products.length > 0">
                                <div class="col-lg-3 col-md-3 col-6" v-for="(product, i) in products" :key="i">
                                    <product-box :product-details="product" :is-loading="loading" />
                                </div>
                            </v-row>
                            <div v-else>
                                <div style="background-color: aliceblue;" class="notfound">
                                    <h4>Didn't find what you were looking for?
                                        <span>Request somthing & we'll look into it.</span>
                                    </h4>
                                <!-- todo:: message seller -->
                                <div class="primary--text pa-1 lh-1 text-center fs-14 fw-700 pa-4">
                                    <a href="#." class="btn btn-sm btn-success" @click="showNewProductRequestDialog({status:true})">Request a Product</a>
                                </div>
                                <NewProductRequestDialog />
                                <!-- message seller -->
                                </div>

                            </div>
                        </div>
                        <div class="text-center" v-if="totalPages > 1">
                            <v-pagination v-model="queryParam.page" class="my-4" :length="totalPages" prev-icon="la-angle-left" next-icon="la-angle-right" :total-visible="7" elevation="0" @input="pageSwitch"></v-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import ShowMore from "./../components/inc/ShowMore";
    import NewProductRequestDialog from '../components/product/NewProductRequestDialog';

    export default {
        metaInfo() {
            return {
                title: this.metaTitle,
            }
        },
        data: () => ({
            metaTitle: '',
            loading: true,
            filterDrawerOpen: false,
            totalProducts: 0,
            totalPages: 1,
            isBrandRoute: false,
            queryParam:{
                page: 1,
                categorySlug: null,
                brandIds: [],
                attributeValues: [],
                keyword: null,
                sortBy: 'popular',
                minPrice: null,
                maxPrice: null,
            },
            attributes: [],
            allBrands: [],
            rootCategories: [],
            parentCategory: {},
            currentCategory: {},
            childCategories: [],
            selectedBrand: [],
            relatedCategory: [],
            products:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
        }),
        components: {
            ShowMore,
            NewProductRequestDialog,
        },
        computed:{
            sortingOptions() {
                return [
                    { name: this.$i18n.t('most_popular'), value: 'popular' },
                    { name: this.$i18n.t('latest_first'), value: 'latest' },
                    { name: this.$i18n.t('oldest_first'), value: 'oldest' },
                    { name: this.$i18n.t('higher_price_first'), value: 'highest_price' },
                    { name: this.$i18n.t('lower_price_first'), value: 'lowest_price' },
                ]
            },
            sortingDefault:{
                get(){
                    return { name: this.$i18n.t('most_popular'), value: 'popular' }
                },
                set(newVal){}
            },
        },
        methods: {
            ...mapActions("auth", ["showNewProductRequestDialog"]),
            pageSwitch(pageNumber){
                this.$router
                    .push({
                        query: {
                            ...this.$route.query,
                            page: this.queryParam.page
                        }
                    })
                    .catch(() => {})

                this.getList({
                    page: pageNumber
                })
            },
            sortUpdate(sort){
                this.queryParam.sortBy = sort;

                this.$router
                    .push({
                        query: {
                            ...this.$route.query,
                            sortBy: this.queryParam.sortBy
                        }
                    })
                    .catch(() => {})

                this.getList({
                    sortBy:sort
                })
            },
            brandChange(id){

                if(this.queryParam.brandIds.indexOf(id) > -1){
                    let index = this.queryParam.brandIds.indexOf(id)
                    this.queryParam.brandIds.splice(index, 1);
                }else{
                    this.queryParam.brandIds.push(id)
                }

                this.$router
                    .push({
                        query: {
                            ...this.$route.query,
                            brandIds: this.queryParam.brandIds
                        }
                    })
                    .catch(() => {})

                this.getList({})
            },
            attributeValueChange(id){

                if(this.queryParam.attributeValues.indexOf(id) > -1){
                    let index = this.queryParam.attributeValues.indexOf(id)
                    this.queryParam.attributeValues.splice(index, 1);
                }else{
                    this.queryParam.attributeValues.push(id)
                }

                this.$router
                    .push({
                        query: {
                            ...this.$route.query,
                            attributeValues: this.queryParam.attributeValues
                        }
                    })
                    .catch(() => {})

                this.getList({})
            },
            filterByPriceRange(){
                let priceRange = {}
                priceRange.minPrice = this.queryParam.minPrice
                priceRange.maxPrice = this.queryParam.maxPrice

                this.$router
                    .push({
                        query: {
                            ...this.$route.query,
                            ...priceRange
                        }
                    })
                    .catch(() => {})

                this.getList({})
            },
            toggleFilterDrawer(status){
                this.filterDrawerOpen = status
            },
            async getList(obj){

                this.loading = true;
                let params = { ...this.queryParam, ...obj}

                let url = 'product/search?'
                url += `&page=${this.queryParam.page}`
                url += params.categorySlug ? `&category_slug=${params.categorySlug}` : ''
                url += params.brandIds ? `&brand_ids=${params.brandIds}` : ''
                url += params.attributeValues ? `&attribute_values=${params.attributeValues}` : ''
                url += params.keyword ? `&keyword=${params.keyword}` : ''
                url += params.sortBy ? `&sort_by=${params.sortBy}` : ''
                url += params.minPrice ? `&min_price=${params.minPrice}` : ''
                url += params.maxPrice ? `&max_price=${params.maxPrice}` : ''

                const res = await this.call_api("get", url);
                // console.log(res);

                if (res.data.success) {
                    this.loading = false;
                    this.metaTitle= res.data.metaTitle;
                    this.products = res.data.products.data;
                    this.attributes = res.data.attributes.data;
                    this.allBrands = res.data.allBrands.data;
                    this.rootCategories = res.data.rootCategories.data;
                    this.parentCategory = res.data.parentCategory ? res.data.parentCategory : {};
                    this.currentCategory = res.data.currentCategory ? res.data.currentCategory : {};
                    this.childCategories = res.data.childCategories ? res.data.childCategories.data : [];
                    this.totalPages = res.data.totalPage;
                    this.totalProducts = res.data.total;
                    this.selectedBrand = res.data.selectedBrands.data ? res.data.selectedBrands.data : [];
                    this.relatedCategory = res.data.selectedCategory.data ? res.data.selectedCategory.data : [];
                    this.queryParam.page = res.data.currentPage;
                }
            }
        },
        created() {
            this.isBrandRoute = this.$route.params.brandId ? true : this.isBrandRoute
            this.queryParam.categorySlug = this.$route.params.categorySlug || this.queryParam.categorySlug;
            this.queryParam.keyword = this.$route.params.keyword;
            this.queryParam.brandIds = this.$route.params.brandId || this.queryParam.brandIds;

            this.queryParam.page = this.$route.query.page || this.queryParam.page;
            this.queryParam.sortBy = this.$route.query.sortBy || this.queryParam.sortBy;
            this.queryParam.minPrice = this.$route.query.minPrice || this.queryParam.minPrice;
            this.queryParam.maxPrice = this.$route.query.maxPrice || this.queryParam.maxPrice;
            this.queryParam.attributeValues = this.$route.query.attributeValues || this.queryParam.attributeValues;
            console.log(this.queryParam);
            if(this.queryParam.sortBy !== 'popular'){
                let selectedSort = this.sortingOptions.find(sort =>  sort.value === this.queryParam.sortBy)
                this.sortingDefault = selectedSort
            }

            this.getList({
                page: this.queryParam.page,
                categorySlug: this.queryParam.categorySlug,
                brandIds: this.queryParam.brandIds,
                attributeValues: this.queryParam.attributeValues,
                keyword: this.queryParam.keyword,
                sortBy: this.queryParam.sortBy,
                minPrice: this.queryParam.minPrice,
                maxPrice: this.queryParam.maxPrice,
            })
        },
    }
</script>
<style scoped>
    @media (max-width: 1263px) {
        .sticky-top{
            position: static;
        }
        .filter-drawer{
            position: fixed;
            width: 350px;
            max-width: 100vw;
            height: 100vh;
            visibility: hidden;
            right: -350px;
            top: 0;
            bottom: 0;
            background: #fff;
            z-index: 610;
            box-shadow: 0 0 50px rgb(0 0 0 / 16%);
            transition: all 0.3s;
            -webkit-transition: all 0.3s;
        }
        .filter-drawer.open{
            right: 0;
            visibility: visible;
        }
    }
    @media (min-width: 1264px) {
        .w-lg-270px{
            width:270px;
        }
    }
</style>