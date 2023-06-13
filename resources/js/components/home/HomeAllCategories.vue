<template>
    <div v-if="!loading" class="ftr_cat">
        <v-row dense>
            <v-col cols="12" sm="6" md="4" xl="3" v-for="(category, i) in allCategories" :key="i" class="lh-1 mb-2">
                <router-link
                    :to="{ name: 'Category', params: {categorySlug: category.slug}}"
                    class="">{{ category.name }}</router-link>
                <div class="subcatftr" v-if="category.children.data.length">
                    <router-link v-for="(child, j) in category.children.data" :key="j" :to="{ name: 'Category', params: {categorySlug: child.slug}}" class="text-reset d-inline-block fs-11 opacity-70">
                        {{ child.name }}<span v-if="j + 1 !== category.children.data.length" class="px-1">|</span>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        allCategories: []
    }),
    async created(){
        const res = await this.call_api("get", `all-categories`);
        if(res.status === 200){
            this.allCategories = res.data.data
            this.loading = false
        }
    }
    
}
</script>
<style scoped>
    h2{
        font-size: 16px;
    }
    @media (min-width: 960px) {
        h2{
            font-size: 24px;
        }
    }
</style>