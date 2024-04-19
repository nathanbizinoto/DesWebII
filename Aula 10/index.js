const {createApp} = Vue

createApp({
    data(){
        return{
            heros: [
                {nome: "Nathan", idade: 23, email:"nathan@bizinoto.com"}
            ]


        }
    },
    methods: {
        expandirItem(item){
            item.expanded = !item.expanded
        }

    }
}).mount("#app")