import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
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
    }
}).mount('#app')