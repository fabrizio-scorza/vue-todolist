const {createApp} = Vue

createApp({
    //dati di createApp
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
            ],
            newTaskText:'',
            doneValue:'',
        }
    },
    //metodi di createApp
    methods:{
        //metodo che rimuove la task dalla lista
        removeTask(i){
            this.tasks.splice(i,1);
        },
        addTask(){
            if(this.newTaskText !== ''){
                this.tasks.push({ 
                    text: this.newTaskText,
                    done: false
                });
                this.newTaskText ='';
            }
        },
        setDone(task){
            doneValue = task.done === true ? 'done': '';
            return doneValue
        },
        invertDone(task){
        task.done = !task.done 
        }
    }
}).mount('#app');