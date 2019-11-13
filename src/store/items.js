export default {
    state: {
        items:[
            {
                id:'fbidTYBMSALKDJL',
                title:'Some title',
                description:'some description',
                imageId:'fbfbrjsjfsggbcbgfdrht',
                level:['1','22'],
                raiting:3,
                ratingCount:100,
                video_playlist_id:'hgjqdwknakjgfa'
            },
            {
                id:'fbidjletneppm',
                title:'Some title',
                description:'some description',
                imageId:'fbfbrjuhksbcbgfdrht',
                level:['22','333'],
                raiting:5.3,
                ratingCount:87,
                video_playlist_id:'infbhekwso'
            },
            {
                id:'fbidlqfjfjbknfsjhk',
                title:'Some title',
                description:'some description',
                imageId:'ornkwfjbcgslkwjoo',
                level:['333','444'],
                raiting:4,
                ratingCount:100,
                video_playlist_id:'hgjqdwknakjgfa'
            },
        ]
    },
    mutations: {
        SET_ITEMS(state,payload){
            state.items = payload
        },
    },
    getters: {
        getItems: (state) => state.items,
    }
}
