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
                        <v-toolbar-title>SignUp</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                                :value="error"
                                type="warning">
                            {{error}}
                        </v-alert>
                        <v-form>
                            <v-text-field
                                    label="E-Mail"
                                    name="login"
                                    prepend-icon="person"
                                    type="email"
                                    required
                                    v-model="email"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="lock"
                                    type="password"
                                    required
                                    v-model="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="" @click.prevent="signup" :disabled="processing">Sign Up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return{
                email:null,
                password:null
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
            signup(){
                this.$store.dispatch('SIGNUP',{email:this.email, password:this.password})
            }
        }
    }
</script>

<style scoped>

</style>