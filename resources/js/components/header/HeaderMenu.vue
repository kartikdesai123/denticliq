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
                            <div class="v-list-item__title">
                                <a href="/all-categories" class="text-reset fs-13 fw-700 opacity-80">All Categories</a>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                  
                                    <li><a href="#">Submenu Name 1</a></li>
                                    <li><a href="#">Submenu Name 1</a></li>
                                    <li><a href="#">Submenu Name 1</a></li>
                                    <li class="subsubmenuitems">
                                        <a  href="#">New Arrival</a>
                                        <ul class="dropdown-submenu" aria-labelledby="dropdownMenu1">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Action 2</a></li>
                                            <li><a href="#">Action 3</a></li>
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
};
</script>
