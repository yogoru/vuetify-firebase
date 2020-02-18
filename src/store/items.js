export default {
    state: {
        items:[
            {
                id:'fbidTYBMSALKDJL',
                title:'Very loooooooooong item title 1',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis quam qui quos reiciendis repellat, veniam! Aliquam archin inventore ipsa, itaque mollitia nisi  commodi esse est eveniet ex excepturi molestiae nemo neque nostrum,  inventore iste mollitia officia omnis perferendis possimus praesentium, quia quis quo, sed sit temporibus ut! Accusamus accusantium aut beatae cumque ducimus, eos fuga, iste magni neque, non numquam repellendus repudiandae sequi sunt veritatis vero voluptate. Dolorem dolorum earum enim non porro ratione repudiandae? A at blanditiis cumque cupiditate deleniti dolore doloremque ducimus ea eligendi est facere id illum impedit incidunt iure, laboriosam, magnam molestias nihil nostrum obcaecati perspiciatis porro possimus quibusdam quo rem repellat rerum sint soluta tempore tenetur totam ullam veniam veritatis vero vitae voluptates voluptatum. Debitis labore officiis omnis possimus!',
                imageId:'fbfbrjsjfsggbcbgfdrht',
                level:['A1','B2'],
                rating:3.2,
                ratingCount:100,
                video_playlist_id:'hgjqdwknakjgfa'
            },
            {
                id:'fbidjletneppm',
                title:'Some item title 2',
                description:'some description 2',
                imageId:'fbfbrjuhksbcbgfdrht',
                level:['B3','C3'],
                rating:4.9,
                ratingCount:87,
                video_playlist_id:'infbhekwso'
            },
            {
                id:'fbidlqfjfjbknfsjhk',
                title:'Some item title 3',
                description:'some description 3',
                imageId:'ornkwfjbcgslkwjoo',
                level:['C1','C3'],
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
