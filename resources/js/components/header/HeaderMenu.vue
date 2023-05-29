<template>
    <div class="menumain">
        <v-container class="py-0">
            <div class="d-flex align-center justify-center">
                <template v-if="loading">
                    <v-skeleton-loader
                        type="text"
                        class="w-100px px-3 mt-2"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="text"
                        class="w-100px px-3 mt-2"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="text"
                        class="w-100px px-3 mt-2"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="text"
                        class="w-100px px-3 mt-2"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="text"
                        class="w-100px px-3 mt-2"
                    ></v-skeleton-loader>
                </template>

                <template v-else>
                    <v-list class="d-flex py-0">
                         <!-- <a href="/all-categories" class="text-reset fs-13 fw-700 opacity-80">All</a>-->
                        <div tabindex="-1" role="listitem" class="submenuitems flex-grow-0 flex-fill v-list-item theme--light">
                            <div v-if="!iscat" class="v-list-item__title">
                                <router-link :to="{ name: 'AllCategories'}" class="text-reset fs-13 fw-700 opacity-80">All Categories</router-link>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li v-for="(category, index) in categories" :key="index" :class="{'subsubmenuitems': category.children.data.length != 0}">
                                    <router-link :to="{ name: 'Category', params: {categorySlug: category.slug}}">{{ category.name }}</router-link>

                                    <ul v-if="category.children.data.length != 0"  aria-labelledby="dropdownMenu1" class="dropdown-submenu">
                                    <li v-for="(subcategory, subIndex) in category.children.data" :key="subIndex">
                                        <router-link :to="{ name: 'Category', params: {categorySlug: subcategory.slug}}">{{ subcategory.name }}</router-link>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <v-list-item
                            v-for="(link, label, i) in $optional(
                                'data.header_menu'
                            )"
                            :key="i"
                            class="flex-grow-0 flex-fill"
                        >
                            <v-list-item-title>
                                <dynamic-link
                                    :to="link"
                                    append-class="text-reset fs-13 fw-700 opacity-80"
                                >
                                    {{ label }}
                                </dynamic-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </template>
            </div>
            <v-divider class=""></v-divider>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        loading: { type: Boolean, required: true, default: true },
        data: {
            type: Object,
            default: {},
        },
    },
    data: () => ({
        iscat: true,
        categories: [{},{},{},{}]
    }),
    beforeMount() {
        this.allCategory();
    },
    methods:{
        async allCategory() {
        const res = await this.call_api("get", "all-categories");
        if (res.data.success) {
            this.categories = res.data.data
            this.iscat = false;
        }
    }
    },
};
</script>

