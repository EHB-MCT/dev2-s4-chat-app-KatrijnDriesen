"use strict";



const chat = {
    author: "JanEveraert",
    init() {
        document.getElementById("chatForm").addEventListener("submit", (e) => {
            e.preventDefault();
            this.sendMessage();
        });
        this.fetchMessages();
    },
    sendMessage() {
        const messageField = document.getElementById("chatInput");
        fetch("https://dev2chat.onrender.com/message", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: this.author,
                message: messageField.value
            })
        })
        .then((res) => {
            console.log(res);
            this.fetchMessages();
            messageField.value="";
        })
        .catch((e) => {
            console.error("could not send");
        });
    },
    fetchMessages() {
        fetch("https://dev2chat.onrender.com/messages")
            .then(res => res.json())
            .then(data => {
                const messageBox = document.getElementById("messageContainer");
                messageBox.innerHTML = "";
                data.sort((a, b) => a.id - b.id).forEach(message => {
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
                <span class="time">${new Date(message.created_at).getHours()}:${new Date(message.created_at).getMinutes()}</span>
            </div>
            <p>
                ${message.message}
            </p>
        </div>`;
        messageBox.insertAdjacentHTML("beforeend", htmlString);
    }

};
chat.init();