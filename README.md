# WC4 - Chat app

API: https://dev2chat.onrender.com/

## opdracht
Tijdens dit werkcollege maken we een chat applicatie waarin jullie met elkaar kunnen chatten.
We maken hiervoor gebruik van een API (Koppelingen naar een externe site.).

To warm up, try to console.log the first message from the API.
This should be a relatively smooth task - if you find yourself getting stuck, don't wait too long to ask for help.

Tips:

    Problems fetching the data? --> Revise all theory on API's
    Problems working with the data? --> Revise theory on arrays and objects

## Stappen
1.You start by retrieving all available messages. You retrieve these messages through the API. Check the API documentation to know which URL to address.  
2.Once you have stored the messages in the array messages, call the renderMessages function, it should show all the messages on the page.
3.Time to be able to add messages yourself. Create an eventHandler and make sure you can read the value of the inputField.
4.You want to make sure your message is added to the database: you will need to make an API call to do this. To send data to an API, use the POST method. Again, look at the API documentation to know what data the endpoint expects. If you encounter any cors issues, try using no-cors mode https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
5.Once you have added a message you will want to reload and render all messages. Make sure your input field is empty as well.
6.Make sure you also see all new messages from fellow students: you do this by re-entering the API every so often.
7.Last step: make sure that messages sent by you get a different style: you do this by adding the css class 'own' to it.
