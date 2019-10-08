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
<!--                        <v-tooltip bottom>-->
<!--                            <template v-slot:activator="{ on }">-->
<!--                                <v-btn-->
<!--                                        :href="source"-->
<!--                                        icon-->
<!--                                        large-->
<!--                                        target="_blank"-->
<!--                                        v-on="on"-->
<!--                                >-->
<!--                                    <v-icon>mdi-code-tags</v-icon>-->
<!--                                </v-btn>-->
<!--                            </template>-->
<!--                            <span>Source</span>-->
<!--                        </v-tooltip>-->
<!--                        <v-tooltip right>-->
<!--                            <template v-slot:activator="{ on }">-->
<!--                                <v-btn-->
<!--                                        icon-->
<!--                                        large-->
<!--                                        href="https://codepen.io/johnjleider/pen/pMvGQO"-->
<!--                                        target="_blank"-->
<!--                                        v-on="on"-->
<!--                                >-->
<!--                                    <v-icon>mdi-codepen</v-icon>-->
<!--                                </v-btn>-->
<!--                            </template>-->
<!--                            <span>Codepen</span>-->
<!--                        </v-tooltip>-->
                    </v-toolbar>
                    <v-card-text>
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
                        <v-btn color="" @click.prevent="signup">Sign Up</v-btn>
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
        methods:{
            signup(){
                this.$store.dispatch('SIGNUP',{email:this.email, password:this.password})
            }
        }
    }
</script>

<style scoped>

</style>