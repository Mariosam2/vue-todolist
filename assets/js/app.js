/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */


import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            taskText: '',
            valid: true,
            tasks: [
                {
                    text: 'Fare esercizio del pomeriggio',
                    done: true,
                },
                {
                    text: 'Lavare i piatti',
                    done: false,
                },
                {
                    text: 'Andare a correre',
                    done: false,
                },
                {
                    text: 'Imparare Tedesco',
                    done: true,
                },
                {
                    text: 'Trovare un lavoro',
                    done: false,
                },
                {
                    text: 'Imparare php',
                    done: false,
                },
                {
                    text: 'Fare la patente',
                    done: true,
                },
            ],
        }
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        addTask(text){
            const newTask = {
                text: text,
                done: false,
            }
            console.log(newTask);
            console.log(this.valid);
            if(this.taskText.length !== 0){
                console.log(this.valid);
                this.valid = true;
                this.tasks.unshift(newTask);
                this.taskText = '';
            } else {

                this.valid = false;
                console.log(this.valid);
            }
            
        },
        setDone(task){
            task.done = !task.done;
        },
        cleanTasks(){
            //console.log(this.tasks);
            this.tasks = this.tasks.filter(function(task){
                //console.log(task.done)
                if(!task.done){
                    console.log('elemento da rimuovere')
                    return true;
                }
            })

            console.log(this.task)

            
        }
    }
}).mount('#app')