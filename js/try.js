"use strict";



const chat = {
    author: "yourName",
    init() {
        document.getElementById("chatForm").addEventListener("submit", (event) => {
            event.preventDefault();
            this.sendMessage();
            }
        );
        this.fetchMessages();
            /* fetch('https://dev2chat.onrender.com/messages')
            .then(response => response.json())
            .then(data => console.log(data[0])); */
    },

    sendMessage() {
        const messageField = document.getElementById("chatInput");
        fetch('https://dev2chat.onrender.com/message', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                author: this.author,
                message: messageField.value
            })
        })
        .then((result) => {
            console.log(result);
            this.fetchMessages();
            messageField.value = "";
        })
        .catch((event) => {
            console.error("could not send");
        });
    },

    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
            .then(response => response.json())
            .then(data => {
            const messageBox = document.getElementById("messageContainer");
            messageBox.innerHTML = "";
            data.forEach(message => {
                this.renderMessage(message);
            });
        });
    },

    renderMessage(message) {
        const messageBox = document.getElementById("messageContainer");
        const mine = message.author == this.author ? "own": null;
        const htmlString = `
        <div class="messageItem ${mine}">
        <div class="header">
            <span class="author">${message.author}</span>
            <span class="time">${message.created_at}</span>
        </div>
        <p>
            ${message.message}
        </p>
        </div>`;
        messageBox.insertAdjacentHTML("beforeend",htmlString);
    }

};

chat.init();