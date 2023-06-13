<template>
    <div class="pb-6" id="all-cat">
        <v-container>
            <h2 class="main_heading">{{ $t('all_categories') }}</h2>
            <div class="row" v-if="categories.length">
                <div class="col-md-3" v-for="(category, i) in categories" :key="i">
                    <div v-if="loading">
                        <v-skeleton-loader
                            type="image"
                            class=""
                            height="235"
                        ></v-skeleton-loader>
                    </div>

                    <div outlined class="pa-6" v-else>
                                <h3 class="mb-3"><router-link :to="{ name: 'Category', params: {categorySlug: category.slug}}" class="text-reset" style="color:#f28708 !important">{{ category.name }}</router-link></h3>
                                <div v-if="category.children.data.length">
                                    <!-- <v-hover v-slot="{ hover }" v-for="(children, j) in category.children.data" :key="j">
                                        <router-link
                                            :class="['text-reset me-1 opacity-80', {'primary--text text-decoration-underline':hover}]"
                                            :to="{ name: 'Category', params: {categorySlug: children.slug}}"
                                        >{{ children.name }}<span v-if="j+1 !== category.children.data.length" class="">,</span></router-link>
                                    </v-hover> -->
                                    <ul v-if="category.children.data.length != 0"  aria-labelledby="dropdownMenu1" >
                                        <li v-for="(subcategory, subIndex) in category.children.data" :key="subIndex" :class="{'subsubmenuitems': subcategory.childrensub.data.length != 0}">
                                            <router-link style="color:#000 !important" :to="{ name: 'Category', params: {categorySlug: subcategory.slug}}">{{ subcategory.name }}</router-link>

                                            <ul v-if="subcategory.childrensub.data.length != 0"  aria-labelledby="dropdownMenu1" >
                                                <li v-for="(subsubcategory, subsubIndex) in subcategory.childrensub.data" :key="subsubIndex">
                                                    <router-link :to="{ name: 'Category', params: {categorySlug: subsubcategory.slug}}">{{ subsubcategory.name }}</router-link>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>
                                </div>
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
        categories: [{},{},{},{}]
    }),
    mounted: () => {},
    methods: {},
    async created() {
        const res = await this.call_api("get", "all-categories");
        if (res.data.success) {
            this.categories = res.data.data
            this.loading = false
        }
    }
};
</script>
