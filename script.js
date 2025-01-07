function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    // Add user's message to the chatbox
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userInput;
    chatbox.appendChild(userMessage);

    // Call a function to get the chatbot's response
    const botResponse = getBotResponse(userInput);
    const botMessage = document.createElement("p");
    botMessage.textContent = "Bot: " + botResponse;
    chatbox.appendChild(botMessage);
}

function getBotResponse(input) {
    // Simple bot logic (you can replace this with more complex logicLowerCase().includes("hello")) {
        return "Hello! How can I help you today?";
    } else {
        return "I'm not sure how to respond to that.";
    }
}
