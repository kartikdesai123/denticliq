<template>
    <div>
        <v-container>
            <v-row>
                <div class="col-lg-10 mx-auto loginregform">
                    <login-form />
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import LoginForm from '../../components/auth/LoginForm.vue';
export default {
    components: { LoginForm },
};
</script>
