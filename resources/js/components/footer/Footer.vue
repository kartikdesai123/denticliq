<template>
    <footer class="grey ftrdsn darken-4 pt-8 white--text pb-14 pb-md-10 pb-lg-0">
        <v-container class="">
            <v-row>
                <v-col class="mb-5" lg="3" cols="6">
                    <h4>
                        {{ $optional("data.footer_link_one?.title") }}
                    </h4>
                    <ul class="list-unstyled ps-0 fs-13">
                        <li
                            v-for="(link, label, i) in $optional( 'data.footer_link_one?.menu' )"
                            :key="i"
                            class="py-2"
                        >
                            <dynamic-link :to="link" append-class="text-reset" >{{ label }}</dynamic-link >
                        </li>
                    </ul>
                </v-col>
                <v-col class="mb-5" lg="3" cols="6">
                    <h4>
                        {{ $optional("data.footer_link_two?.title") }}
                    </h4>
                    <ul class="list-unstyled ps-0 fs-13">
                        <li
                            v-for="(link, label, i) in $optional( 'data.footer_link_two?.menu')"
                            :key="i"
                            class="py-2"
                        >
                            <dynamic-link :to="link" append-class="text-reset" >{{ label }}</dynamic-link>
                        </li>
                    </ul>
                </v-col>
                <v-col class="mb-5" lg="3" cols="12">
                    <h4>{{ $t("contact_us") }}</h4>
                    <ul class="list-unstyled ps-0 fs-13">
                        <li class="py-2 mb-2">
                            <div>
                                <i class="las la-home me-3 mb-2"></i>  {{ $optional( "data.contact_info?.contact_address" ) }}
                            </div>
                        </li>
                        <li class="py-2 mb-2">
                            <div>
                                <i class="las la-envelope me-3 mb-2"></i> {{ $optional( "data.contact_info?.contact_email" ) }}
                            </div>
                        </li>
                        <li class="py-2 mb-2">
                            <div>
                                <i class="las la-phone me-3 mb-2"></i> {{ $optional( "data.contact_info?.contact_phone")}}
                            </div>
                        </li>
                    </ul>
                </v-col>
                <v-col class="mb-5" lg="3" cols="12">
                    <h4>
                        {{ $t("Get your special offers") }}
                    </h4>
                    <v-form lazy-validation v-on:submit.prevent="subscribe()">
                        <v-text-field
                            :placeholder="$t('your_email_address')"
                            type="email"
                            class="white mb-2"
                            v-model="subscribeForm.email"
                            :error-messages="emailErrors"
                            hide-details="auto"
                            required
                            outlined
                        ></v-text-field>
                        <v-btn
                            class="px-12 mb-4"
                            elevation="0"
                            type="submit"
                            color="primary"
                            @click="subscribe"
                            :loading="subscribeFormLoading"
                            :disabled="subscribeFormLoading"
                            outlined
                            >{{ $t("subscribe") }}</v-btn
                        >
                    </v-form>
                    <div class="ftrmedia">
                        <ul class="list-unstyled d-flex justify-start mt-2 ps-0 " >
                            <li
                                v-for="(link, label, i) in $optional( 'data.social_link' )"
                                :key="i"
                                :class="['social-icon', { 'ms-2': i != 0 }]"
                            >
                                <a :href="link" :class="label" target="_blank">
                                    <i :class="{ lab: true, ['la-' + label]: true, }" ></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
            <div class="py-3 border-top border-bottom border-gray-800">
                <ul class="list-unstyled d-flex flex-wrap ps-0" style="justify-content: center;">
                    <li
                        v-for="(link, label, i) in $optional('data.footer_menu')"
                        :key="i"
                        :class="[ 'py-2 pe-4 pe-md-7', { 'ps-md-3 ps-md-7': i !== 0 }]"
                    >
                        <dynamic-link :to="link" append-class="text-reset">{{ label }}</dynamic-link>
                    </li>
                </ul>
            </div>
            <div class="ftrcat">
                    <HomeAllCategories />
            </div>
            <v-col md="12"  cols="12">
                    <div  v-html="$optional('data.copyright_text')" class="lh-1 fs-13 text-center" ></div>
            </v-col>
        </v-container>
    </footer>
</template>

<script>
import HomeAllCategories from "../home/HomeAllCategories";
import { required, email } from "vuelidate/lib/validators";
export default {
    data: () => ({
        loading: true,
        data: {},
        subscribeForm: {
            email: "",
        },
        subscribeFormLoading: false,
    }),
    validations: {
        subscribeForm: {
            email: {
                required,
                email,
            },
        },
    },
    components: {
        HomeAllCategories,
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.subscribeForm.email.$dirty) return errors;
            !this.$v.subscribeForm.email.required &&
                errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.subscribeForm.email.email &&
                errors.push(
                    this.$i18n.t("this_field_is_required_a_valid_email")
                );
            return errors;
        },
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `setting/footer`);
            if (res.status === 200) {
                this.data = res.data;
                this.loading = false;
            }
        },
        async subscribe() {
            this.$v.subscribeForm.$touch();
            if (this.$v.subscribeForm.$anyError) {
                return;
            }
            this.subscribeFormLoading = true;
            const res = await this.call_api(
                "post",
                "subscribe",
                this.subscribeForm
            );

            this.snack({ message: res.data.message });
            this.subscribeFormLoading = false;
        },
    },
    created() {
        this.getDetails();
    },
};
</script>
