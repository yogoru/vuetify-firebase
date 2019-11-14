<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex
                    xs12
                    sm10
                    md8
                    offset-sm1
                    offset-md2
            >
                <v-container fluid>
                    <v-layout row>
                        <v-flex>
                            <v-text-field lavel="Search"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex
                    v-for="item in items"
                    :key="item.id"
                    xs12
                    sm10
                    md8
                    offset-sm1
                    offset-md2
            >
                <v-card color="" class="black--text">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs4 md3>
                                <v-img src="https://tiimg.tistatic.com/new_website1/ti-design/images/no-img-foung.png"
                                >
                                </v-img>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title class="headline">{{item.title}}</v-card-title>
                                <v-card-text>{{item.description}}</v-card-text>
                                        <v-divider class="black"></v-divider>
                                        <div>Level: {{getItemLevel(item.level)}}</div>
                                <v-card-actions>
                                    <v-rating
                                            v-model="item.raiting"
                                            color="black"
                                            readonly
                                            dense
                                            half-increments
                                            background-color="white"
                                    ></v-rating>
                                    <div class="ml-1">
                                        <span>{{item.rating}}</span>
                                        <span> ({{item.ratingCount}})</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn flat>view</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Items",
        computed:{
            items(){
                return this.$store.getters.getItems
            }
        },
        methods:{
            getItemLevel(level){
                return level.join('/')
            }
        }
    }
</script>

<style scoped>

</style>