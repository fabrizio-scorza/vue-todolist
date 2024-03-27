const {createApp} = Vue

createApp({
    data(){
        return{
            //array di oggetti in data 
            tasks:[
                {
                    text: 'Preparare la cena',
                    done: false,
                },
                {
                    text: 'Comprare le verdure',
                    done: false,
                },
                {
                    text: 'Fare la lista della spesa per domani',
                    done: true,
                },
                {
                    text: 'Guardare la nuova serie su Netflix',
                    done: false,
                },
                {
                    text: "Sistemare l'armadio",
                    done: true,
                },
            ]
        }
    }
}).mount('#app');