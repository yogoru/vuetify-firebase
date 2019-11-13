<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color=""
                            dark
                            flat
                    >
                        <v-toolbar-title>SignIn</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                                :value="error"
                                type="warning">
                            {{error}}
                        </v-alert>
                        <v-form v-model="valid">
                            <v-text-field
                                    label="E-Mail"
                                    name="login"
                                    prepend-icon="person"
                                    type="email"
                                    required
                                    v-model="email"
                                    :rules="emailRules"
                            ></v-text-field>

                            <v-text-field
                                    @keyup.enter="signIn"
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="lock"
                                    type="password"
                                    required
                                    v-model="password"
                                    :rules="passwordRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="" @click.prevent="signIn" :disabled="processing || ! valid">Sign In</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "SignIn",
        data(){
            return{
                email:null,
                password:null,
                valid: false,

                emailRules: [
                    (v) => !!v || 'Pls Enter Email',
                    (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Wrong Email'
                ],
                passwordRules: [
                    (v) => !!v || 'Pls Enter Password',
                    (v) => (v && v.length >= 6) || 'Password too short - minimum length is 6 characters'
                ],
            }
        },
        computed:{
            error(){
                return this.$store.getters.getError
            },
            processing(){
                return this.$store.getters.getProcessing
            },
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated
            }
        },
        watch:{
            isUserAuthenticated(val){
                if(val === true)
                    this.$router.push("/")
            }
        },
        methods:{
            signIn(){
                this.$store.dispatch('SIGNIN',{email:this.email, password:this.password})
            }
        }
    }
</script>

<style scoped>

</style>