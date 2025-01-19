const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const chatbox = document.getElementById('chatbox');

    if (userInput) {
        const userMessage = `<div><strong>You:</strong> ${userInput}</div>`;
        chatbox.innerHTML += userMessage;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: userInput,
            max_tokens: 150,
        });

        let botResponse = response.data.choices[0].text.trim();
        const botMessage = `<div><strong>Bot:</strong> ${botResponse}</div>`;
        chatbox.innerHTML += botMessage;

        document.getElementById('userInput').value = '';
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
