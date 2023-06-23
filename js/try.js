"use strict";

//https://dev2chat.onrender.com/

//html:
//.own is er nog niet

const chat = {
    author: "yourName",
    init() {
        const array = [];
        fetch('https://dev2chat.onrender.com/messages')
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(function(data) {
                this.array = data.map(value) => return value;
                //this.array = data.map();
            });
            console.log(this.array);
    },

    sendMessage() {

    },

    fetchMessages() {

    },

    renderMessage(message) {

    }

};

chat.init();