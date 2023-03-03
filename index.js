Vue.createApp({
    data() {
        return {
            word: null,
            showList: false,
            message: [],
            message2: ""


        }
    },
    methods: {
        showWord(word) {
            if (word) {
                this.message = [word, word.toLowerCase(), word.toUpperCase(), word[0].toUpperCase() + word.slice(1),
                    word.slice(0, -1) + word.slice(-1).toUpperCase(), word.split("").reverse().join("")];
                this.showList = true;
                this.message2 = "";
            }
            else {
                this.message = [];
                this.showList = false;
                this.message2 = "No word was entered! Please type a word inside the input field."
            }
        }

    }
}).mount("#app")