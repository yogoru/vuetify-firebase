export default {
    state: {
        items:[
            {
                id:'fbidTYBMSALKDJL',
                title:'Some item title',
                description:'some description ',
                imageId:'fbfbrjsjfsggbcbgfdrht',
                level:['1','22'],
                rating:3.2,
                ratingCount:100,
                video_playlist_id:'hgjqdwknakjgfa'
            },
            {
                id:'fbidjletneppm',
                title:'Some item title',
                description:'some description',
                imageId:'fbfbrjuhksbcbgfdrht',
                level:['22','333'],
                rating:4.9,
                ratingCount:87,
                video_playlist_id:'infbhekwso'
            },
            {
                id:'fbidlqfjfjbknfsjhk',
                title:'Some item title',
                description:'some description',
                imageId:'ornkwfjbcgslkwjoo',
                level:['333','444'],
                rating:4,
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
