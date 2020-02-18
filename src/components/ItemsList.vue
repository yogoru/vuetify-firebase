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
                        <v-flex xs7 md8>
                            <v-text-field label="Search" v-model="searchTerm"></v-text-field>
                        </v-flex>
                        <v-flex xs5 md4>
                            <v-select label="Level" :items="levels" v-model="level" multiple></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex
                    v-for="item in filteredItems"
                    :key="item.id"
                    xs12
                    sm10
                    md8
                    offset-sm1
                    offset-md2
            >
                <v-card color="" class="black--text">
                    <v-container fluid class="hidden-xs-and-down">
                        <v-layout row >
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
                                            v-model="item.rating"
                                            color="black"
                                            readonly
                                            dense
                                            half-increments
                                            background-color="white"
                                    ></v-rating>
                                    <div class="ml-1 hidden-sm-and-down">
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
        data(){
            return {
                searchTerm: null,
                level: [],
                levels:['A1','A2','A3','B1','B2','B3','C1','C2','C3']
            }
        },
        computed:{
            items(){
                return this.$store.getters.getItems
            },
            filteredItems(){
                let items = this.items
                if(this.searchTerm)
                    items = items.filter(i => i.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0
                    || i.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)
//intersect
                if(this.level.length)
                    items = items.filter(i => this.level.filter(val => i.level.indexOf(val) !== -1).length > 0)

                return items
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