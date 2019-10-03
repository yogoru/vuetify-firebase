<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                class="hidden-md-and-up">
            <v-list >
                <v-list-item
                        v-for="(item,i) in menuItems"
                        :key="`navdrawer${i}`">
                    <v-list-item-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title
                                v-text="item.title">
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
        <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up">
        </v-app-bar-nav-icon>
            <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title >
            <span>LearnEng</span>
            <span class="font-weight-light">App</span>
        </v-toolbar-title>
            </router-link>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item,i) in menuItems" text
               :key="`menuitem${i}`"
               :to="item.route">
           <v-icon class="material-icons" left v-html="item.icon"></v-icon>
            {{item.title}}
        </v-btn>
        </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        // name: "AppHeader",
        data(){
            return{
                drawer: null
            }
        },
        computed:{
            menuItems(){
                return[
                    {
                        icon: 'visibility',
                        title: 'Read',
                        route:  '/books',
                    },
                    {
                        icon: 'extension',
                        title: 'Learn Words',
                        route:  '/words',
                    },
                    {
                        icon: 'account_circle',
                        title: 'Account',
                        route:  '/profile',
                    },
                    {
                        icon: 'exit_to_app',
                        title: 'LogOut',
                        route:  '/logout',
                    },
                    {
                        icon: 'input',
                        title: 'SignIn',
                        route:  '/signin',
                    },
                    {
                        icon: 'lock_open',
                        title: 'Signup',
                        route:  '/signup',
                    }
                ]
                }
            }
        }

</script>

<style scoped>

</style>