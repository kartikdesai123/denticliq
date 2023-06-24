<template>
      <div class="auth-box">
        <v-container>
            <v-row>
                <v-col xl="10" class="mx-auto loginregform">
                    <div class="rounded-lg border border-gray-200 overflow-hidden white shadow-light">
                        <v-row no-gutters>
                            <v-col cols="12" lg="6" order="2" order-lg="1" class="banner p-0" >
                                <banner :loading="false" :banner=" $store.getters['app/banners'] .registration_page " class="mt-5 mt-lg-0"/>
                            </v-col>
                            <v-col cols="12" order="1" order-lg="2" lg="6" class="p-0">
                                <div class="log_right">
                                    <h1>{{ $t("Welcome To") }}<span>{{ $store.getters["app/appName"] }}</span></h1>
                                    <v-form
                                        ref="loginForm"
                                        lazy-validation
                                        v-on:submit.prevent="register()"
                                    >
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <v-text-field
                                                :placeholder="$t('full_name')"
                                                type="text"
                                                v-model="form.name"
                                                :error-messages="nameErrors"
                                                @blur="$v.form.name.$touch()"
                                                hide-details="auto"
                                                required
                                                outlined
                                            ></v-text-field>
                                        </div>
                                        <div class="form-group col-lg-6" v-if="authSettings.customer_login_with == 'phone' || authSettings.customer_login_with == 'email_phone'">
                                           
                                            <vue-tel-input
                                                v-model="form.phone"
                                                v-bind="mobileInputProps"
                                                :onlyCountries=" availableCountries"
                                                @validate="phoneValidate"
                                            >
                                                <template slot="arrow-icon" ><span class=" vti__dropdown-arrow " >&nbsp;▼</span ></template >
                                            </vue-tel-input>
                                            <div class=" v-text-field__details mt-2 pl-3 " v-if="$v.form.phone.$error" >
                                                <div class=" v-messages theme--light error--text " role="alert">
                                                    <div class=" v-messages__wrapper " >
                                                        <div class=" v-messages__message " >{{ $t("this_field_is_required") }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" v-text-field__details mt-2 pl-3" v-if="!$v.form.phone.$error && form.showInvalidPhone">
                                                <div class=" v-messages theme--light error--text " role="alert" >
                                                    <div class=" v-messages__wrapper " >
                                                        <div class=" v-messages__message " >
                                                            {{ $t("phone_number_must_be_valid") }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-6" v-if="authSettings.customer_login_with == 'email' || authSettings.customer_login_with == 'email_phone'">
                                           
                                            <v-text-field
                                                :placeholder="$t('email_address')"
                                                type="email"
                                                v-model="form.email"
                                                :error-messages="emailErrors"
                                                @blur="$v.form.email.$touch()"
                                                hide-details="auto"
                                                required
                                                outlined
                                            ></v-text-field>
                                        </div>
                                        <div class="form-group col-lg-6">
                                          
                                            <v-text-field
                                                placeholder="* * * * * * * *"
                                                v-model="form.password"
                                                :error-messages="passwordErrors"
                                                @blur="$v.form.password.$touch()"
                                                type="password"
                                                class="input-group--focused"
                                                hide-details="auto"
                                                required
                                                outlined
                                            ></v-text-field>
                                        </div> 
                                        <div class="form-group col-lg-6">
                                           
                                            <v-text-field
                                                placeholder="* * * * * * * *"
                                                v-model="form.confirmPassword"
                                                :error-messages="confirmPasswordErrors"
                                                @blur="$v.form.confirmPassword.$touch()"
                                                type="password"
                                                class="input-group--focused"
                                                hide-details="auto"
                                                required
                                                outlined
                                            ></v-text-field>
                                        </div>
                                        <div class="form-group col-lg-12">
                                            {{$t("by_signing_up_you_agree_to_our")}}
                                            <router-link
                                                :to="{ name: 'CustomPage', params: { pageSlug: 'terms-and-conditions', }, }"
                                                class="log-link text-decoration-underline "
                                            >{{ $t("terms_and_conditions")}}</router-link>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                        <v-btn
                                            class="sub-btn"
                                            elevation="0"
                                            type="submit"
                                            color="primary"
                                            @click="register"
                                            :loading="loading"
                                            :disabled="loading"
                                            >{{ $t("create_account") }}</v-btn
                                        >
                                    </div>
                                    </div>
                                    </v-form>
                                    <div class="log-footer"
                                        v-if="generalSettings.social_login.facebook == 1 || generalSettings.social_login.twitter == 1 || generalSettings.social_login.google == 1">
                                         <h5>{{ $t("or") }}, {{ $t("join_with") }}</h5>
                                        <SocialLogin class="mb-3"/>
                                        <div class="hv-acc">{{ $t("already_have_an_account") }},
                                            <router-link :to="{ name: 'Login' }" class="log-link text-decoration-underline">{{ $t("login") }}</router-link>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { required, requiredIf, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { VueTelInput } from "vue-tel-input";
import SocialLogin from "../../components/auth/SocialLogin.vue";
import snackbar from "../../components/inc/SnackBar";
export default {
    data: () => ({
        mobileInputProps: {
            inputOptions: {
                type: "tel",
                placeholder: "phone number",
            },
            dropdownOptions: {
                showDialCodeInSelection: false,
                showFlags: true,
                showDialCodeInList: true,
            },
            autoDefaultCountry: false,
            validCharactersOnly: true,
            mode: "international",
        },
        form: {
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            invalidPhone: true,
            showInvalidPhone: false,
        },
        passwordShow: false,
        loading: false,
    }),
    components: {
        snackbar,
        VueTelInput,
        SocialLogin,
    },
    validations: {
        form: {
            name: { required },
            email: {
                requiredIf: requiredIf(function (){
                    return this.authSettings.customer_login_with == 'email' || this.authSettings.customer_login_with == 'email_phone'
                }),
                email,
            },
            phone: {
                requiredIf: requiredIf(function (){
                    return this.authSettings.customer_login_with == 'phone' || this.authSettings.customer_login_with == 'email_phone'
                }),
            },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs("password") },
        },
    },
    computed: {
        ...mapGetters("app", ["generalSettings", "availableCountries"]),
        ...mapGetters("auth", ["authSettings"]),
        ...mapGetters("cart", ["getTempUserId"]),
        nameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required &&
                errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.requiredIf &&
                errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.email.email &&
                errors.push(
                    this.$i18n.t("this_field_is_required_a_valid_email")
                );
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors;
            !this.$v.form.password.required &&
                errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.password.minLength &&
                errors.push(
                    this.$i18n.t("password_must_be_minimum_6_characters")
                );
            return errors;
        },
        confirmPasswordErrors() {
            const errors = [];
            if (!this.$v.form.confirmPassword.$dirty) return errors;
            !this.$v.form.confirmPassword.required &&
                errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.confirmPassword.sameAsPassword &&
                errors.push(
                    this.$i18n.t("password_and_confirm_password_should_match")
                );
            return errors;
        },
    },
    methods: {
        ...mapActions("auth", ["login"]),
        ...mapMutations("cart", ["removeTempUserId"]),
        ...mapMutations("auth", ["updateChatWindow", "showLoginDialog"]),
        phoneValidate(phone) {
            this.form.invalidPhone = phone.valid ? false : true;
            if (phone.valid) this.form.showInvalidPhone = false;
        },
        async register() {
            this.$v.form.$touch();
            if ((this.authSettings.customer_login_with == 'phone' || this.authSettings.customer_login_with == 'email_phone') && this.form.invalidPhone) {
                this.form.showInvalidPhone = true;
                return;
            }
            if (this.$v.form.$anyError) {
                return;
            }
            this.form.phone = this.form.phone.replace(/\s/g, "");
            if (this.getTempUserId) {
                this.form.temp_user_id = this.getTempUserId;
            }
            this.loading = true;
            const res = await this.call_api("post", "auth/signup", this.form);
            if (res.data.success) {
                if (this.getTempUserId) {
                    this.removeTempUserId();
                }
                if (this.authSettings.customer_otp_with == 'disabled') {
                    this.login(res.data);
                    this.showLoginDialog(false);
                    this.updateChatWindow(false);
                    this.$router.push(
                        this.$route.query.redirect || { name: "DashBoard" }
                    );
                } else {

                    if (
                        this.authSettings.customer_login_with == 'email' ||
                        (this.authSettings.customer_login_with == 'email_phone' && this.authSettings.customer_otp_with == 'email')
                    ) {
                        this.$router.push({
                            name: "VerifyAccount",
                            params: { email: this.form.email },
                        });
                    }else{
                        this.$router.push({
                            name: "VerifyAccount",
                            params: { phone: this.form.phone },
                        });
                    }
                    
                    this.snack({
                        message: res.data.message,
                    });                    
                }
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red",
                });
            }
            this.loading = false;
        },
    },
};
</script>
